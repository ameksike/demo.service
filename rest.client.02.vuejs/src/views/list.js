/*
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 15/03/2020
 * @license: GPL v3
 */
Vue.component('ks-list', {
    props: ['list'],
    template: `
    <div class="container">
        <div class="row">
                <div class="col">
                        <button @click="btnAdd" class="btn btn-primary"><i class="fa fa-plus-circle fa-2x"></i></button>
                </div>
                <div class="col text-rigth">
                        <h5>Total: <span class="badge badge-success">{{total}}</span></h5>
                </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <table class="table table-striped">
                    <thead>
                        <tr class="bg-primary text-light">
                            <th>ID</th>                                    
                            <th>Name</th>
                            <th>Sex</th>
                            <th>Age</th>    
                            <th>Actions</th>
                        </tr>  
                    </thead>
                    <tbody>
                        <tr v-for="(obj,index) of list">                                
                            <td>{{obj.id}}</td>                                
                            <td>{{obj.name}}</td>
                            <td>{{obj.sex}}</td>
                            <td>
                                <div class="col-md-2">
                                <input type="number" v-model.number="obj.age" class="form-control text-right" disabled>      
                                </div>    
                            </td>
                            <td>
                            <div class="btn-group" role="group">
                                <button class="btn btn-secondary" title="Editar" @click="btnEdit(obj.id, obj.name, obj.age, obj.sex)"><i class="fas fa-pencil-alt"></i></button>    
                                <button class="btn btn-danger" title="Eliminar" @click="btnDelete(obj.id)"><i class="fas fa-trash-alt"></i></button>      
                            </div>
                            </td>
                        </tr>    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `,    
    computed:{
        total(){
            return this.list ? this.list.length : 0;   
        }
    },
    data:{
        name:'',
        sex:'',
        age: 0,
        id: 0
    },
    methods:{
        btnEdit:async function(id, name, age, sex){     
            await Swal.fire(new ModalEdit(id, name, age, sex)).then((result) => {
                if (result.value) {                                             
                    let data = {
                        name: document.getElementById('name').value,
                        sex: document.getElementById('sex').value,
                        age: document.getElementById('age').value,
                        id: document.getElementById('id').value
                    };                
                    
                    this.edit(data);
                }
            });
        },
        btnDelete: function(id){
            Swal.fire({
                title: 'Are you shure to delete this record?: '+id+" ?",         
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor:'#d33',
                cancelButtonColor:'#3085d6',
                confirmButtonText: 'Borrar'
            }).then((result) => {
                if (result.value) {            
                  this.delete({id});      
                }
            });
        },
        btnAdd:async function(){                    
            const { value: formValues } = await Swal.fire(ModalAdd);      
            if(this.name == "" || this.sex == "" || this.age == 0){
                Swal.fire({ type: 'info', title: 'Incomplete Data' }); 
            }else{          
                this.add(formValues);          
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });               
            }
        }, 
        delete: function(person){

            let srv = new PersonService();
            srv.delete(person,
                (data)=>{
                    if(data){
                        this.load();
                        this.msg('DELETED!', 'This record was deleted.', 'success');
                    }else{
                        this.msg('DELETED!', 'ther is an error.', 'warning');
                    }
                },
                (error)=>{
                    this.msg('DELETED!', 'ther is an error:' + error, 'warning');
                }
            );
        },
        add: function(person){
            let srv = new PersonService();
            srv.insert(person, (data)=>{
                this.load();
                this.msg('ADD!', 'This record was add.', 'success');
            });
        },
        edit: function(person){
            let srv = new PersonService();
            srv.update(person,
                (data)=>{
                    if(data){
                        this.load();
                        this.msg('EDIT!', 'This record was add.', 'success');
                    }else{
                        this.msg('EDIT!', 'ther is an error.', 'warning');
                    }
                },
                (error)=>{
                    this.msg('EDIT!', 'ther is an error:' + error, 'warning');
                }
            );
        },
        msg: function(action, msg, type){
            Swal.fire( action, msg, type );
        },
        load: function(){
            let srv = new PersonService();
            srv.list((data)=>{
                App.list = data; 
            });
        }
    }
});