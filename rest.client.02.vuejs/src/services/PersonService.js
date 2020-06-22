/*
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 21/06/2019
 * @license: GPL v3
 */
class PersonService 
{
    url;
    constructor(){
        this.url = "/rest.server.01.ksrest/index.php/person/";
    }

    list(done, fail){
        $.ajax({
            dataType: "json",
            url: this.url,
        })
         .done(function( data, textStatus, jqXHR ) {
             if(done instanceof Function) done(data);
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             if(fail instanceof Function) fail(textStatus);
        });
    }

    insert(data, done, fail){
        $.ajax({
            data: {
                "name" : data.name, 
                "age" : data.age
            },
            type: "POST",
            url: this.url,
            error: function(error) {
                if(fail instanceof Function) fail(error);
            },
            success: function (data){
                if(done instanceof Function) done(data);
            }
        });
    }

    update(data, done, fail){
        // data: JSON.stringify(data)
        $.ajax({
            data: {
                "name" : data.name, 
                "age" : data.age
            },
            type: "PUT",
            dataType: "json",
            url: this.url + "/" + data.id,
            error: function(error) {
                if(fail instanceof Function) fail(error);
            },
            success: function (data){
                if(done instanceof Function) done(data);
            }
        });
    }
    
    delete(data, done, fail){
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: this.url + "/" + data.id,
            error: function(error) {
                if(fail instanceof Function) fail(error);
            },
            success: function (data){
                if(done instanceof Function) done(data);
            }
        });
    }
};
