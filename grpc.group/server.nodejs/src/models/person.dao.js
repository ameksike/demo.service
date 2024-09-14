let persons = {};

function create(person) {
  persons[person.id] = person;
}

function read(id) {
  return persons[id] || null;
}

function update(person) {
  if (persons[person.id]) {
    persons[person.id] = person;
    return person;
  }
  return null;
}

function remove(id) {
  if (persons[id]) {
    delete persons[id];
    return true;
  }
  return false;
}

module.exports = {
  create,
  read,
  update,
  delete: remove,
};
