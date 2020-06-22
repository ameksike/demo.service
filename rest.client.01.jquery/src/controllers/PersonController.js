/*
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 21/06/2019
 * @license: GPL v3
 */
class PersonController 
{
    container;
    msg;
    srvPerson; 

    constructor(container, msg, srvPerson){
        this.container = container;
        this.msg = msg;
        this.srvPerson = srvPerson;
    }

    list(){
        this.clear();
        this.srvPerson.list(
            (data)=>{
                for(var i in data){
                    this.container.append(this.showLine(data[i])) ;
                }
            },
            (error)=>{
                this.msg.append(this.showLine("ACTION LIST ERROR: " + error)) ;
            }
        );
    }

    insert(){
        this.srvPerson.insert({
                name:  $('#name').val(),
                age: $('#age').val(),
            },
            (data)=>{
                if(data){
                    this.list();
                }else{
                    this.msg.append("ACTION INSERT: FAIL") ;
                }
            },
            (error)=>{
                this.msg.append("ACTION INSERT ERROR: " + error) ;
            }
        );
    }

    update(){
        this.srvPerson.update({
                name: $('#name').val(),
                age: $('#age').val(),
                id: $('#id').val()
            },
            (data)=>{
                if(data){
                    this.list();
                }else{
                    this.msg.append("ACTION UPDATE: FAIL") ;
                }
            },
            (error)=>{
                this.msg.append("ACTION UPDATE ERROR: "+error) ;
            }
        );
    }
    
    delete(){
        this.srvPerson.delete({id: $('#id').val()},
            (data)=>{
                if(data){
                    this.list();
                }else{
                    this.msg.append("ACTION DELETE: FAIL") ;
                }
            },
            (error)=>{
                this.msg.append(this.showLine("ACTION DELETE ERROR: "+error)) ;
            }
        );
    }

    showLine(data){
        return "<li>" 
            +"<b>  id:</b> " + data['id'] 
            +"<b>, name: </b>" + data['name'] 
            +"<b>, age: </b>"+ data['age'] 
            + "</li>";
    }

    clear(){
        this.container.html("");
        this.msg.html("");
    }
};
