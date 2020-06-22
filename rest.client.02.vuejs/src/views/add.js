/*
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 15/03/2020
 * @license: GPL v3
 */
var ModalAdd = {
    title: 'Add New Person',
    html: `
        <div class="row">
            <label class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-7">
                <input id="name" type="text" class="form-control"></div>
            </div>
            <div class="row">
                <label class="col-sm-3 col-form-label">Sex</label>
                <div class="col-sm-7">
                    <input id="sex" type="text" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <label class="col-sm-3 col-form-label">Age</label>
            <div class="col-sm-7">
                <input id="age" type="number" min="0" class="form-control">
            </div>
        </div>
    `,              
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Save',          
    confirmButtonColor:'#1cc88a',          
    cancelButtonColor:'#3085d6',  
    preConfirm: () => {            
        return {
            name: document.getElementById('name').value, 
            sex: document.getElementById('sex').value, 
            age: document.getElementById('age').value
        
        }/*[
            this.name = document.getElementById('name').value,
            this.sex = document.getElementById('sex').value,
            this.age = document.getElementById('age').value                    
        ]*/
      }
}; 