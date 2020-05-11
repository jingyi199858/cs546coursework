const mongoCollections = require('../mongoCollections');
const animals = mongoCollections.animals;

async function create(name, animalType){
    if(!name || typeof name != "string") throw "Input name invalid!";
    if(!animalType || typeof animalType != "string") throw "Input animalType is invalid";

    const animalCollection = await animals();

    let newAnimal = {
        name: name,
        animalType: animalType
    };

    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw 'Could not add animal';

    const newId = insertInfo.insertedId;

    const animal = await this.get(newId);
    return animal;
}

async function getAll(){
    const animalCollection = await animals();

    const animallist = await animalCollection.find({}).toArray();

    return animallist;
}

async function get(id){
    if (!id) throw 'You must provide an id to search for';

    const animalCollection = await animals();
    const animall = await animalCollection.findOne({_id: id});
    if (animall === null) throw 'No animal with that id';

    return animall;
}

async function remove(id){
    if (!id) throw 'You must provide an id to search for';

    const animalCollection = await animals();
    console.log(typeof id)
    const deletionInfo = await animalCollection.removeOne({_id: id});

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete animal with id of ${id}`;
    }
}

async function rename(id, newName){
    if(!id) throw "The input id is invalid";

    if(!newName || typeof newName != "string") throw "The input newName is invalid";
    const animalCollection = await animals();
    const updateAnimal = {
        name: newName
    };

    const updatedInfo = await animalCollection.updateOne({_id: id}, {$set: updateAnimal});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update animal successfully';
    }

    return await this.get(id);
}

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.get = get;
module.exports.remove = remove;
module.exports.rename =rename;

