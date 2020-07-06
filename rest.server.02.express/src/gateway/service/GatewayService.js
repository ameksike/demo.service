/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		06/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
var path = __dirname  + "/../../../";
var config = require( path + 'cfg/config.json');
var data = require( path + 'data/fill.json');
var GatewayDAO = require( __dirname + '/../model/GatewayDAO.js');

//... Set config base on NODE_ENV
process.env.NODE_ENV = !isTestEnv() ? 'dev' : 'test';
config = config.env[process.env.NODE_ENV];
var gatewayDAO = new GatewayDAO(config.app.db);

//... define util functions
global.log = function(data){
    if(!isTestEnv())
        console.log(data);
}

function isTestEnv(){
    return process.env.NODE_ENV === 'test';
}

//... define service 
var GatewayService = {
    fill(callback){
        gatewayDAO.fill(callback, data);
    },
    clean(callback){
        gatewayDAO.clean(callback)
    }
};

module.exports = GatewayService;