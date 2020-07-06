/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		06/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
class Gateway {
    
    constructor(){
        this.sn = {
            type: String,
            required: true,
            unique: true
        };
        this.name = {
            type: String,
            required: true
        };
        this.ipv4 =  {
            type: String,
            required: true,
            /*validate: {
                validator: this.validateIPv4,
                message: '{VALUE} is not a valid IPv4 value!'
            },*/
        };
        this.devices =  {
            type: Array,
            required: false,
            validate: [this.validateMaxDevices, 'Error: {PATH} exceeds the limit of 10']
        };
    }

    validateMaxDevices(val){
        return val.length <= 10;
    }

    validateIPv4(val){
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(target);
    }
}
module.exports = Gateway;