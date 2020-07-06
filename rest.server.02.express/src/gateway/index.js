/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		05/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
var BaseModule = require( __dirname + '/../app/base/BaseModule.js');
class GatewayModule extends BaseModule{

    initRoutes(){
        this.app.get(this.prefix + "/fill", (req, res, next) => { 
            this.controller.fill(req, res, next);
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: fill"); 
        });
        this.app.delete(this.prefix, (req, res, next) => { 
            this.controller.clean(req, res, next);
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: clean"); 
        });
        super.initRoutes();
    }
}
module.exports = GatewayModule;
