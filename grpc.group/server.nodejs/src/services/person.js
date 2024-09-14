
const database = require('../models/person.dao');
const uuid = require('uuid');

class PersonService {

    constructor(cfg = null) {
        this.status = cfg?.status || {};
    }

    create(call, callback) {
        const newPerson = { id: uuid.v4(), ...call.request.person };
        database.create(newPerson);
        callback(null, { person: newPerson });
    }

    select(call, callback) {
        const person = database.read(call.request.id);
        if (person) {
            callback(null, { person });
        } else {
            callback({ code: this.status.NOT_FOUND, details: "Person not found" });
        }
    }

    update(call, callback) {
        const updatedPerson = database.update(call.request.person);
        if (updatedPerson) {
            callback(null, { person: updatedPerson });
        } else {
            callback({ code: this.status.NOT_FOUND, details: "Person not found" });
        }
    }

    remove(call, callback) {
        const success = database.delete(call.request.id);
        if (success) {
            callback(null, { message: "Person deleted successfully" });
        } else {
            callback({ code: this.status.NOT_FOUND, details: "Person not found" });
        }
    }
}

module.exports = PersonService;