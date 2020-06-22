/*
 * @version: 0.1
 * @authors: Antonio Membrides Espinosa
 * @mail: tonykssa@gmail.com
 * @made: 15/03/2020
 * @license: GPL v3
 */
class ModalEdit
{
    constructor(id, name, age, sex){
        this.html = `
            <div class="form-group">
                <div class="row">
                    <label class="col-sm-3 col-form-label">Id</label>
                    <div class="col-sm-7">
                        <input id="id" value="${id}" type="text" class="form-control"></div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-7">
                        <input id="name" value="${name}" type="text" class="form-control"></div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-3 col-form-label">Sex</label>
                    <div class="col-sm-7">
                        <input id="sex" value="${sex}" type="text" class="form-control"></div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-sm-3 col-form-label">Age</label>
                    <div class="col-sm-7">
                        <input id="age" value="${age}" type="number" min="0" class="form-control"></div>
                    </div>
                </div>
            </div>
        `;
        this.focusConfirm = false;
        this.showCancelButton = true;   
        this.title = 'Person Edit';
    }
}