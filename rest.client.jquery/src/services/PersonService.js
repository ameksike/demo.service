class PersonService 
{
    url;
    constructor(){
        this.url = "/rest.server.ksrest/index.php/person/";
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

    insert(done, fail){

        $.ajax({
            data: {
                "name" : $('#name').val(), 
                "age" : $('#age').val()
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

    update(done, fail){
        /*
            let data = {
                "name" : $('#name').val(), 
                "age" : $('#age').val()
            };
            data: JSON.stringify(data),
        */
        $.ajax({
            data: {
                "name" : $('#name').val(), 
                "age" : $('#age').val()
            },
            type: "PUT",
            dataType: "json",
            url: this.url + "/" + $('#id').val(),
            error: function(error) {
                if(fail instanceof Function) fail(error);
            },
            success: function (data){
                if(done instanceof Function) done(data);
            }
        });
    }
    
    delete(done, fail){
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: this.url + "/" + $('#id').val(),
            error: function(error) {
                if(fail instanceof Function) fail(error);
            },
            success: function (data){
                if(done instanceof Function) done(data);
            }
        });
    }
};
