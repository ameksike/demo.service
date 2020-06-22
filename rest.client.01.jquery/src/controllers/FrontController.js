/*
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 21/06/2019
 * @license: GPL v3
 */
class FrontController
{
    controllers;

    constructor(){
        this.controllers = {};
    }

    initPersonController(){
        //... create controller object
        let controller = new PersonController(
            $('#container'),
            $('#msg'),
            new PersonService()
        );
        //... bind view event with PersonController
        $('#btnList').click(   (EventHandler) => controller.list() );   
        $('#btnClear').click(  (EventHandler) => controller.clear() );  
        $('#btnInsert').click( (EventHandler) => controller.insert() );  
        $('#btnDelete').click( (EventHandler) => controller.delete() );  
        $('#btnUpdate').click( (EventHandler) => controller.update() );  
        //... register PersonController in global constext
        this.controllers['Person'] = controller;
    }
}