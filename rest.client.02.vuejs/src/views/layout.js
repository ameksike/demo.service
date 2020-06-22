/*
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 15/03/2020
 * @license: GPL v3
 */
var App = new Vue({
    el:'#app',
    data:{
        list:[],
        sms:'',
        num: 0
    },
    created: function(){
        this.load();
    },
    methods:{
        load: function(){
            let srv = new PersonService();
            srv.list((data)=>{
                this.list = data; 
            });
        }
    }
});