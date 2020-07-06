/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		05/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */

var config = require( __dirname + '/../../cfg/config.json');
var express = require("express");
var app = express();
var mod = [];

//... Set config base on NODE_ENV
process.env.NODE_ENV = !isTestEnv() ? 'dev' : 'test';
config = config.env[process.env.NODE_ENV];

//... Set response config
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//... Allow all origin request, CORS on ExpressJS
var cors = require('cors');
app.use(cors());

//... Load modules 
config.srv.module.path = __dirname + '/../';
config.srv.module.load.forEach(name => {
    var Module = require(config.srv.module.path + name);
    if(Module instanceof Function){
        var obj = new Module(app, {
            'cfg': config.app,
            'mod': config.srv.module.path + name + "/",
            'app': config.srv.module.path + "app/",
            'name': name
        });
        mod.push(obj);
    }
});


global.log = function(data){
    if(!isTestEnv())
        console.log(data);
}
function isTestEnv(){
    return process.env.NODE_ENV === 'test';
}
module.exports.app = app;
module.exports.config = config;
module.exports.env = {
    isTest: isTestEnv
};
