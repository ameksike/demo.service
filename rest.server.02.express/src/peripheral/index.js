/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		05/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
var BaseModule = require( __dirname + '/../app/base/BaseModule.js');
class PeripheralModule extends BaseModule{
    init(){
        this.prefix = "/gateway/:pid/" + this.opt.name;
        this.initComponents();
        this.initRoutes();
    }
}
module.exports = PeripheralModule;