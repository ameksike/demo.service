/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		05/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
var BaseController = require( __dirname + '/../../app/base/BaseController.js');
var BaseValidator = require( __dirname + '/../../app/base/BaseValidator.js');
var PeripheralDAO = require( __dirname + '/../model/PeripheralDAO.js');

class DefaultController extends BaseController{
    constructor(opt){
        super(opt);
        this.peripheralDAO = new PeripheralDAO(opt.cfg.db);
        this.validator = new BaseValidator();
    }

    selectAll(req, res){
        this.peripheralDAO.select(result => {
            res.json(result);
        },{
            'sn' : req.params.pid
        });
    }

    select(req, res){
        this.peripheralDAO.select(result => {
            res.json(result);
        },{
            'sn' : req.params.pid,
            'devices.uid': parseInt(req.params.id)
        });
    }

    insert(req, res){
        var target = req.body; 
        if(!this.validateIn(target, res))
            return;

        this.peripheralDAO.save(result => {
            res.json(result);
        },{
            'sn' : req.params.pid,
            'item' : target
        });
    }

    update(req, res){
        var target = req.body; 
        this.peripheralDAO.update(result => {
            res.json(result);
        },{ 
            'sn' : req.params.pid,
            'uid': req.params.id 
        },target);
    }

    delete(req, res){
        this.peripheralDAO.delete(result => {
            res.json(result);
        },{ 
            'sn' : req.params.pid,
            'uid': req.params.id 
        });
    }

    
    validateIn(target, res){
        var errms = [];
        if(!this.validator.isInteger(target.uid)){
            errms.push("uid field is not a valid integer number format, and it is required");
        }    
        if(!this.validator.isBoolean(target.status)){
            errms.push("status field is not a valid boolean value format, and it is required");
        }    
        if(!this.validator.isValue(target.vendor)){
            errms.push("vendor field is not a valid string value format, and it is required");
        }  
        if(errms.length != 0){
            res.json({
                "status": false,
                'message': "Error: " + errms.join('; '),
                'data': target
            });
            return false;
        }
        return true;
    }
}
module.exports = DefaultController;