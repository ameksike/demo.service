/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		06/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
var BaseDAO = require( __dirname + '/../../app/base/BaseDAO.js');
var GatewayDTO = require( __dirname + '/GatewayDTO.js');

class GatewayDAO extends BaseDAO{

    save(callback, target=null){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');

        /*  other type of validation 
        Gateway.schema.path('devices').validate(function (v) {
            console.log('---------------------------------------------------');
            console.log(v);
            return v.length < 10;
        }, 'Error: the max count device is 10'); 
        */

        var newItem = new Gateway(target);
        newItem.save(function (error) {
            if(callback instanceof Function){
                callback({
                    'status': error ? false : true,
                    'message': error ? 'Error: ' + error.message: 'success',
                    'data': newItem
                });
            }
        });
    }

    select(callback, target=null){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');

        if(!target){
            Gateway.find(function (error, result) {
                if(callback instanceof Function){
                    callback({
                        'status': error ? false : true,
                        'message': error ? 'Error: ' + error.message : 'Success',
                        'data': result
                    });
                }
            });
        }else{
            Gateway.findOne(target, (error, result) => {
                if(callback instanceof Function){
                    callback({
                        'status': error ? false : (result !== null),
                        'message': error ? 'Error: ' + error.message: ((result !== null) ? 'Success' : "Error: the gateway with sn '"+target.sn +"' was not found.") ,
                        'data': result
                    });
                }
            });
        }
    }

    delete(callback, target={}){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        Gateway.deleteMany(target, (error, result) => {
            if(callback instanceof Function){
                callback({
                    'status': error ? false : (result.deletedCount>0),
                    'message': error ? 'Error: ' + error.message: ((result.deletedCount>0) ? 'Success' : "Error: the gateway with sn '"+target.sn +"'  was not found.") ,
                    'data': target
                });
            }
        });
    }

    update(callback, target={}, newData={}){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        Gateway.update(target, newData, { runValidators: true }, (error, result) => {
            if(callback instanceof Function){
                callback({
                    'status': error ? false : (result.nModified>0),
                    'message': error ? 'Error: ' + error.message: ((result.nModified>0) ? 'Success' : "Error: the gateway with sn '"+target.sn +"'  was not found.") ,
                    'data': target
                });
            }
        });
    }

    fill(callback, data){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        Gateway.insertMany(data,  (error, result) => {
            if(callback instanceof Function){
                callback({
                    'status': error ? false : (result.length>0),
                    'message': error ? 'Error: ' + error.message: ((result.length>0) ? 'Success' : "Error: no data import.") ,
                    'data': data
                });
            }
        });   
    }

    clean(callback){
        this.connect(callback);
        var Gateway = this.getModel(GatewayDTO, 'gateway');
        Gateway.deleteMany({}, (error, result) => {
            if(callback instanceof Function){
                callback({
                    'status': error ? false : true, //result.deletedCount > 0
                    'message': error ? 'Error: ' + error.message: 'Success',
                    'data': null
                });
            } 
        });
    }
}
module.exports = GatewayDAO;