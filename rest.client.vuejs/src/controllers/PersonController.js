class PersonController 
{
    container;
    srvPerson; 

    constructor(container, srvPerson){
        this.container = container;
        this.srvPerson = srvPerson;
    }

    list(){
        this.container.html("");
        this.srvPerson.list(
            (data)=>{
                for(var i in data){
                    this.container.append(this.showLine(data[i])) ;
                }
            },
            (error)=>{
                this.container.append(this.showLine("ACTION LIST ERROR: " + error)) ;
            }
        );
    }

    insert(){
        this.srvPerson.insert(
            (data)=>{
                if(data){
                    this.list();
                }else{
                    this.container.append("ACTION INSERT: FAIL") ;
                }
            },
            (error)=>{
                this.container.append("ACTION INSERT ERROR: " + error) ;
            }
        );
    }

    update(){
        this.srvPerson.update(
            (data)=>{
                if(data){
                    this.list();
                }else{
                    this.container.append("ACTION UPDATE: FAIL") ;
                }
            },
            (error)=>{
                this.container.append("ACTION UPDATE ERROR: "+error) ;
            }
        );
    }
    
    delete(){
        this.srvPerson.delete(
            (data)=>{
                if(data){
                    this.list();
                }else{
                    this.container.append("ACTION DELETE: FAIL") ;
                }
            },
            (error)=>{
                this.container.append(this.showLine("ACTION DELETE ERROR: "+error)) ;
            }
        );
    }

    showLine(data){
        return "<li> PERSON " 
            +"<b>-id:</b> " +data['id'] 
            +"<b>-name: </b>" + data['name'] 
            +"<b>-age: </b>"+ data['age'] 
            + "</li>";
    }

    clear(){
        this.container.html("");
    }
};
