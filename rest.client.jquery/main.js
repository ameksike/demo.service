//-------------------------------------------------- GET PERSON REST CLIENT
var srvPerson = new Person();

$(document).ready(function() {
    //-------------------------------------------------- ACTION LIST
    $('#btnList').click(function(e) {
        list();
    });   
    //-------------------------------------------------- ACTION CLEAN LIST
    $('#btnClear').click(function(e) {
        $('#container').html("");
    });  
    //-------------------------------------------------- ACTION INSERT
    $('#btnInsert').click(function(e) {
        
        srvPerson.insert(
            (data)=>{
                if(data){
                    list();
                }else{
                    $('#container').append("ACTION INSERT: FAIL") ;
                }
            },
            (error)=>{
                $('#container').append("ACTION INSERT ERROR: "+error) ;
            }
        );
    });  
    //-------------------------------------------------- ACTION DELETE
    $('#btnDelete').click(function(e) {
        
        srvPerson.delete(
            (data)=>{
                if(data){
                    list();
                }else{
                    $('#container').append("ACTION DELETE: FAIL") ;
                }
            },
            (error)=>{
                $('#container').append(showLine("ACTION DELETE ERROR: "+error)) ;
            }
        );
    });  
    //-------------------------------------------------- ACTION UDATE
    $('#btnUpdate').click(function(e) {
        
        srvPerson.update(
            (data)=>{
                if(data){
                    list();
                }else{
                    $('#container').append("ACTION UPDATE: FAIL") ;
                }
            },
            (error)=>{
                $('#container').append("ACTION UPDATE ERROR: "+error) ;
            }
        );
    });  
});
//-------------------------------------------------- FORMAT ROW
function showLine(data){
    return "<p> * PERSON " 
        +"<b>-id:</b> " +data['id'] 
        +"<b>-name: </b>" + data['name'] 
        +"<b>-age: </b>"+ data['age'] 
        + "</p>";
}
//-------------------------------------------------- ACTION LIST
function list(){
    $('#container').html("");
    srvPerson.list(
        (data)=>{
            for(var i in data){
                $('#container').append(showLine(data[i])) ;
            }
        },
        (error)=>{
            $('#container').append(showLine("ACTION LIST ERROR: "+error)) ;
        }
    );
}