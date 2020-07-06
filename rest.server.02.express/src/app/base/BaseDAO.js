/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		05/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
class BaseDAO{

    constructor(opt){
        this.driver = require('mongoose');
        this.models = require( __dirname + '/BaseDTO.js');
        this.option = opt || {
            "name": "default",
            "host": "localhost",
            "port": "27017",
            "driver": "mongodb"
        };
        this.config = {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 
        };
    }
    
    close() {
        return this.driver.disconnect();
    }

    prepareConnect(callback=undefined){
        this.driver.connect(this.getUri(), this.config).catch((error)=>{
            if(callback instanceof Function){
                var message = error.message ? error.message : error;
                callback({ 'message': 'Error: ' + message });
            }
        });

        this.driver.connection.on('error', error => {
            this.onError(error);
        });

        this.driver.connection.on('connected', error => {
            this.onConnect();
        });
    }

    connect(callback=undefined){
        /* if (process.env.NODE_ENV === 'test') {
           const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);
            mockgoose.prepareStorage().then(() => {
                this.prepareConnect(callback);
            });
        }else{         
        }*/
        this.prepareConnect(callback);
    }

    getUri(){
        var uri = this.option.driver+'://'+this.option.host+':'+this.option.port+'/'+this.option.name;
        return uri;
    }

    getModel(objDTO, collection='default', name=false){
        name = name || collection;
        if(!this.models[name]){
            objDTO = objDTO instanceof Function ? new objDTO() : objDTO; 
            var schema = new this.driver.Schema(objDTO, {
                'collection': collection
                //_id: false
            });
            this.models[name] = this.driver.model(name, schema);
        }
        return this.models[name];
    }

    onError(error){
        var message = error.message ? error.message : error;
        global.log('<------------> DAO ERROR: data base connect error : ' + message);
    }

    onConnect(){
        global.log('<------------> DAO data base connect success');
    }
}
module.exports = BaseDAO;
