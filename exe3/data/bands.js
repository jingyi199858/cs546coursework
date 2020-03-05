const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;

module.exports = {

async  getBand(id){
    if (!id) throw 'You must provide an id to search for';

    const bandCollection = await bands();
    const bandd = await bandCollection.findOne({_id: id});
    if (bandd === null) throw 'No band with that id';

    return bandd;
},

async getAllBands(){
    const bandCollection = await bands();

    const all_bands = await bandCollection.find({}).toArray();

    return all_bands;
},

async removeBand(id){
    if (!id) throw 'You must provide an id to search for';

    const bandCollection = await bands();
    const deletionInfo = await bandCollection.removeOne({_id: id});

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete band with id of ${id}`;
    }
},

async addBand(bandName, bandMembers, yearFormed, genres, recordLabel){
    if (!bandName) throw 'You must provide a name for your band';
    if (!yearFormed) throw 'You must provide a year formed';
    if (!genres || !Array.isArray(genres)) throw 'You must provide an array of generes';
    if (!recordLabel) throw 'You must provide a recordLabel';
    if (!bandMembers || !Array.isArray(bandMembers)) throw 'You must provide an array of bandMembers';

    if (bandMembers.length === 0) throw 'You must provide at least one member.';
    const bandCollection = await bands();

    let newBand = {
      bandName: bandName,
      bandMembers: bandMembers,
      yearFormed: yearFormed,
      genres: genres,
      recordLabel: recordLabel
    };

    const insertInfo = await bandCollection.insertOne(newBand);
    if (insertInfo.insertedCount === 0) throw 'Could not add band';

    const newId = insertInfo.insertedId;

    const band = await this.getBand(newId);
    return band;
},

async updateBand(bandId,bandName, bandMembers, yearFormed, genres, recordLabel){
    if (!bandId) throw 'You must provide an id to search for';

    if (!bandName) throw 'You must provide a name for your band';

    if (!yearFormed) throw 'You must provide a year formed';

    if (!genres || !Array.isArray(genres)) throw 'You must provide an array of generes';

    if (!recordLabel) throw 'You must provide a recordLabel';

    if (!bandMembers || !Array.isArray(bandMembers)) throw 'You must provide an array of bandMembers';

    if (bandMembers.length === 0) throw 'You must provide at least one member.';

    const bandCollection = await bands();
    const updateBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel
    };

    const updatedInfo = await bandCollection.updateOne({_id: id}, {$set: updateBand});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update band successfully';
    }

    return await this.getBand(id);
}

};

