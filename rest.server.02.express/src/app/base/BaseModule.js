/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		05/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
class BaseModule {

    constructor(app, opt){
        this.app = app;
        this.opt = opt;
        this.prefix = "/" + this.opt.name;
        this.init();
    }

    init(){
        this.initComponents();
        this.initRoutes();
    }

    initComponents(){
        this.controller = this.getInstance( 'DefaultController', 'controller');
    }

    initRoutes(){
        var _prefix = this.prefix;

        this.app.get(_prefix, (req, res, next) => {
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: selectAll");
            this.controller.selectAll(req, res, next);
        });
        this.app.post(_prefix, (req, res, next) => {
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: insert");
            this.controller.insert(req, res, next);
        });
        this.app.get(_prefix+"/:id", (req, res, next) => {
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: select");
            this.controller.select(req, res, next);
        });
        this.app.put(_prefix+"/:id", (req, res, next) => {
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: update");
            this.controller.update(req, res, next);
        });
        this.app.patch(_prefix+"/:id", (req, res, next) => {
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: update");
            this.controller.update(req, res, next);
        });
        this.app.delete(_prefix+"/:id", (req, res, next) => {
            global.log("<------------> Module: "+this.opt.name+", Controller: Default, Acction: delete");
            this.controller.delete(req, res, next);
        });
    }
    
    getInstance(name, path='controller'){
        var file = this.opt.mod + path + '/' + name + '.js';
        var Ctrl = require(file);
        return new Ctrl(this.opt);
    }
}
module.exports = BaseModule;