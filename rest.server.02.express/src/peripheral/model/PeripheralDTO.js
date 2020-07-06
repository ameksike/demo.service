
/*
 * @author		Antonio Membrides Espinosa
 * @email    	tonykssa@gmail.com
 * @date		06/01/2020
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * */
const Peripheral = {
    uid : {
        type: Number,
        required: true,
        unique: true
    },
    vendor  : {
        type: String,
        required: true
    },
    created : {
        type: Date,
        required: true
    },
    status :  {
        type: Boolean,
        required: false
    }
}
module.exports = Peripheral;