//Yi Jing
//Mar 18, 2020
const mongoCollections = require('../config/mongoCollections');
const albums = mongoCollections.albums;
const bands = require('./bands');
const uuid = require('uuid/v4');

const exportedMethods = {
  async getAllAlbums() {
    const albumCollection = await albums();
    return await albumCollection.find({}).toArray();
  },
  async getAlbumById(id) {
    const albumCollection = await albums();
    const album = await albumCollection.findOne({_id: id});

    if (!album) throw 'album not found';
    return album;
  },
  async addAlbum(title, author, songs) {
    if (typeof title !== 'string') throw 'No title provided';

    if (!Array.isArray(songs)) {
      songs = [];
    }

    const albumCollection = await albums();

    const newAlbum = {
      title: title,
      author: {
        id: author._id,
        bandName: `${author.bandName}`
      },
      songs: songs,
      _id: uuid()
    };

    const newInsertInformation = await albumCollection.insertOne(newAlbum);
    const newId = newInsertInformation.insertedId;

    await bands.addAlbumToBands(author._id, newId, title, songs);

    return await this.getAlbumById(newId);
  },
  async removeAlbum(id) {
    const albumCollection = await albums();
    let album = null;
    try {
      album = await this.getAlbumById(id);
    } catch (e) {
      console.log(e);
      return;
    }
    const deletionInfo = await albumCollection.removeOne({_id: id});
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete album with id of ${id}`;
    }
    await bands.removeAlbumFromBand(album.author.id, id);
    return true;
  },
  async updateAlbum(id, updatedalbum) {
    const albumCollection = await albums();

    await albumCollection.updateMany({_id: id}, {$push: { songs: updatedalbum.newSongs }, $set: {title: updatedalbum.newTitle}});
    return await this.getAlbumById(id);
  }
};

module.exports = exportedMethods;
