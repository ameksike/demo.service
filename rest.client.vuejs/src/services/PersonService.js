class PersonService 
{
    url;
    constructor(){
        this.url = "/rest.server.ksrest/index.php/person/";
    }

    list(done, fail){
        axios.get(this.url)
        .then(response => {
            if(done instanceof Function) done(response.data);
        })
        .catch(error => {
            if(fail instanceof Function) fail(error);
            this.errored = true
        })
        .finally(() => this.loading = false);
    }

    insert(done, fail){
        const formData = new FormData();
        formData.append("name", $('#name').val());
        formData.append("age", $('#age').val());
        
        axios.post(this.url, formData, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => {
            if(done instanceof Function) done(response.data);
        })
        .catch(error => {
            if(fail instanceof Function) fail(error);
            this.errored = true
        })
        .finally(() => this.loading = false);
    }

    update(done, fail){
        axios.put(this.url + "/" + $('#id').val(),{
            "name" : $('#name').val(), 
            "age" : $('#age').val()
        })
        .then(response => {
            if(done instanceof Function) done(response.data);
        })
        .catch(error => {
            if(fail instanceof Function) fail(error);
            this.errored = true
        })
        .finally(() => this.loading = false);
    }
    
    delete(done, fail){
        axios.delete(this.url + "/" + $('#id').val())
        .then(response => {
            if(done instanceof Function) done(response.data);
        })
        .catch(error => {
            if(fail instanceof Function) fail(error);
            this.errored = true
        })
        .finally(() => this.loading = false);
    }
};
