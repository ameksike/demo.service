
/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		06/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
var BaseDAO = require( __dirname + '/../../app/base/BaseDAO.js');
var GatewayDTO = require( __dirname + '/../../gateway/model/GatewayDTO.js');
var PeripheralDTO = require( __dirname + '/PeripheralDTO.js');

class PeripheralDAO extends BaseDAO {

    save(callback, target){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        var Peripheral = this.getModel(PeripheralDTO, 'peripheral');
        
        Gateway.schema.path('devices').validate(function (v) {
            return v.length < 10;
        }, 'Error: the max count device is 10'); 

        this.select(result1 => {
            var flag = result1 !== null ? (result1.data !== null) : false;
            if(flag){
                callback({ 
                    'status': false,
                    'message': "Error: the device with uid '" + target.item.uid + "' exist for gateway with sn '"+target.sn +"' ",
                    'data': result1.data
                });
            }else{
                /*db.gateway.find( $and: [ {"sn":"19"}, { "devices.lenght": {$lt:10} } ]) ;
                db.gateway.find( { $and: [ { "sn": { $exists:"19" } }, { "devices.lenght": { $exists: {$lt:10}  } } ] } )
                db.gateway.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )*/

                target.item.created =this.getDate();   
                console.log({ 'sn': target.sn, "devices.length": { $lt: 10 } });             
                Gateway.update({ 'sn': target.sn }, { $push: { "devices": new Peripheral(target.item) }}, { runValidators: true }, (error, result) => {
                    console.log(error, result);
                    if(callback instanceof Function){
                            callback({
                                'status': error ? false : (result.nModified>0),
                                'message': error ? 'Error: ' + error.message: ((result.nModified>0) ? 'Success' : 'Error: the max count device is 10'),
                                'data': target.item
                            });
                        }
                });
            }
        },{
            'sn' : target.sn,
            'devices.uid': parseInt(target.item.uid)
        });
    }

    select(callback, target, opt){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        var opt = opt ? opt : (target['devices.uid'] ? { 'devices.$':1 } : ['devices']);
        Gateway.findOne(target, opt, (error, result) => {
            if(callback instanceof Function){
                var success = error ? false : ( result ? true : false  );
                var msgerr = target['devices.uid'] ? "Error: the device with uid '"+target['devices.uid']+"' was not found on gateway with sn '"+target.sn +"' " : "Error: the gateway with sn '"+target.sn +"' was not found.";
                callback({ 
                    'status': success,
                    'message': success ? 'Success' : ( error ? 'Error: ' + error.message : msgerr),
                    'data': result ? (target['devices.uid'] ? result['devices'][0] : result['devices'] ) : result
                });
            }
        });
    }

    delete(callback, target={}){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        Gateway.update(
            { 'sn': target.sn,  devices: { $type: 4 } },
            { $pull: { devices: { uid: parseInt(target.uid) }  } },
            { multi:true }, (error, result) => {
                if(callback instanceof Function){
                    callback({
                        'status': error ? false : (result.nModified>0),
                        'message': error ? 'Error: ' + error.message: ((result.nModified>0) ? 'Success' : "Error: the device with uid '"+target.uid+"' was not found on gateway with sn '"+target.sn +"' ") ,
                        'data': result
                    });
                }
        });
    }

    update(callback, target={}, newData={}){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        var setter = {};
        for(var i in newData)
            setter["devices.$."+i] = newData[i];
        //... setter = { "devices.$": newData };
        Gateway.update(
            { 'sn': target.sn, "devices.uid": parseInt(target.uid) },
            { $set: setter}, (error, result) => {
                if(callback instanceof Function){
                    callback({
                        'status': error ? false : (result.nModified>0),
                        'message': error ? 'Error: ' + error.message: ((result.nModified>0) ? 'Success' : "Error: the device with uid '"+target.uid+"' was not found on gateway with sn '"+target.sn +"' ") ,
                        'data': result
                    });
                }
        });
    }

    getDate(){
        //moment(Date.now()).format('YYYY-MM-DD');
        let ts = Date.now();
        let date_ob = new Date(ts);
        let DD = date_ob.getDate();
        let MM = date_ob.getMonth() + 1;
        let YYYY = date_ob.getFullYear();
        return YYYY + "-" + MM + "-" + DD;
    }
}
module.exports = PeripheralDAO;