//Yi Jing
//Mar 18, 2020
const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const uuid = require('uuid/v4');

module.exports = {

async getBandByID(id){

    const bandCollection = await bands();
    const band = await bandCollection.findOne({_id: id});

    if (!band) throw 'Band not found';
    return band;
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
      _id: uuid(),
      albums: [],
      recordLabel: recordLabel
    };

    const insertInfo = await bandCollection.insertOne(newBand);
    if (insertInfo.insertedCount === 0) throw 'Could not add band';

    const newId = insertInfo.insertedId;

    const band = await this.getBandByID(newId);
    return band;
},

async addAlbumToBands(bandID, albumID, albumTitle, songs) {
    let currentBand = await this.getBandByID(bandID);
    console.log(currentBand);

    const bandCollection = await bands();
    const updateInfo = await bandCollection.updateOne(
      {_id: bandID},
      {$addToSet: {albums: {id: albumID, title: albumTitle, songs: songs}}}
    );

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getBandByID(bandID);
  },

async updateBand(id, updatedBand){
  const band = await this.getBandByID(id);
  console.log(band);

  let bandUpdateInfo = {
      bandName: updatedBand.bandName,
      bandMembers: updatedBand.bandMembers,
      yearFormed: updatedBand.yearFormed,
      genres: updatedBand.genres,
      recordLabel: updatedBand.recordLabel
  };

  const bandCollection = await bands();
  const updateInfo = await bandCollection.updateOne({_id: id}, {$set: bandUpdateInfo});
  if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

  return await this.getBandByID(id);
},
async removeAlbumFromBand(bandID, albumID) {
  let currentBand = await this.getBandByID(bandID);
  console.log(currentBand);

  const bandCollection = await bands();
  const updateInfo = await bandCollection.updateOne({_id: bandID}, {$pull: {albums: {id: albumID}}});
  if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

  return await this.getBandByID(bandID);
}

};

