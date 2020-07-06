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
var GatewayDAO = require( __dirname + '/../model/GatewayDAO.js');

class DefaultController extends BaseController{
    constructor(opt){
        super(opt);
        this.gatewayDAO = new GatewayDAO(opt.cfg.db);
        this.validator = new BaseValidator();
    }

    validateIn(target, res){
        var errms = [];
        if(!this.validator.isIPv4(target.ipv4)){
            errms.push("ipv4 field is not a valid IPv4 format");
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

    selectAll(req, res){
        this.gatewayDAO.select(result => {
            res.json(result);
        });
    }

    select(req, res){
        this.gatewayDAO.select(result => {
            res.json(result);
        },{
            'sn' : req.params.id
        });
    }

    insert(req, res){
        var target = req.body; 
        if(!this.validateIn(target, res))
            return;
        this.gatewayDAO.save(result => {
            res.json(result);
        },target);
    }

    update(req, res){
        var target = req.body; 
        console.log(target);
        if(!this.validateIn(target, res))
            return;
        this.gatewayDAO.update(result => {
            res.json(result);
        }, { 'sn' : req.params.id },target);
    }

    delete(req, res){
        this.gatewayDAO.delete(result => {
            res.json(result);
        }, { 'sn' : req.params.id });
    }

    fill(req, res){
        var data = require(__dirname + '/../../../data/fill.json');
        this.gatewayDAO.fill(result => {
            res.json(result);
        }, data);
    }
    clean(req, res){
        this.gatewayDAO.clean(result => {
            res.json(result);
        });
    }
}
module.exports = DefaultController;