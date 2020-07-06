/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		06/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
class BaseValidator{

    /*
     * param (target: String, format: 192.168.0.1)
     * reurn Boolean
     */
    isIPv4(target){
        //if ( /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/g.test(target)){
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(target)){
            return true;
        }
        return false; //... You have entered an invalid IPv4 address!
    }   

    isIPv6(target){
        if ( /^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$/g.test(target)){
            return true;
        }
        return false; //... You have entered an invalid IPv6 address!
    }  

    isString(target){
        if (/^[A-Za-z]+$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid string value!"
    }

    isDecimal(target){
        if (/^[-+][0-9]+\.[0-9]+[eE][-+]?[0-9]+$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid number value!"
    }

    isNumber(target){
        if (/^[-+]?[0-9]+\.[0-9]+$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid number value!"
    }

    isInteger(target){
        if (/^[0-9]+$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid integer number!"
    }

    isDate(target){
        if (/^[0-9]+$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid date value!"
    }

    isPhoneNumber(target){
        if (/^\d{10}$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid date value!"
    }

    isEmail(target){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid email address!"
    }

    isBoolean(target){ 
        if (/^true|false$/.test(target)){
            return true;
        }
        return false; //... "You have entered an invalid boolean value!"
    }

    isValue(target){
        return (target !== null && target !== undefined);
    }

    isFuntion(target){
        return target instanceof Function;
    }

    isClass(target){
        return this.isFuntion(target);
    }

    isObject(target){
        return target instanceof Object;
    }
}
module.exports = BaseValidator;