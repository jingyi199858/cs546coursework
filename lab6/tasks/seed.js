//Yi Jing
//Mar 18, 2020
const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const bands = data.bands;
const albums = data.albums;

async function main() {
	const db = await dbConnection();
	await db.dropDatabase();

	const createdBand1 = await bands.addBand("Pink Floyd", ["Roger Waters","David Gilmour", "Richard Wright", "Nick Mason"], 1965, ["Psychedelic rock", "Classic Rock", "Rock"],"Columbia Records");
    const id = createdBand1._id;
    const author = {"_id":id, "bandName":"Pink Floyd"};
	await albums.addAlbum('Title', author, ['sadjlkfa','asldjfaksd']);
	
	await albums.addAlbum('Title2', author, ['jjjjjjjj','kkkkkkkkkkkk']);

	console.log('Done seeding database');

	await db.serverConfig.close();
}

main();
