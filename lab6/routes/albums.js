//Yi Jing
//Mar 18, 2020
const express = require('express');
const router = express.Router();
const data = require('../data');
const albumData = data.albums;

router.get('/:id', async (req, res) => {
	try {
		const album = await albumData.getAlbumById(req.params.id);
		res.json(album);
	} catch (e) {
		res.status(404).json({ error: 'album not found' });
	}
});

router.get('/', async (req, res) => {
	try {
		const albumList = await albumData.getAllAlbums();
		res.json(albumList);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

router.post('/', async (req, res) => {
	const blogalbumData = req.body;
	try {
		const { title, author, songs } = blogalbumData;
		const newalbum = await albumData.addAlbum(title, author, songs);
		res.json(newalbum);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

router.put('/:id', async (req, res) => {
	const updatedData = req.body;
	try {
		await albumData.getAlbumById(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'album not found' });
		return;
	}

	try {
		const updatedalbum = await albumData.updateAlbum(req.params.id, updatedData);
		res.json(updatedalbum);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

router.patch('/:id', async (req, res) => {
	const updatedData = req.body;
	try {
		await albumData.getAlbumById(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'album not found' });
		return;
	}

	try {
        const updatedalbum = await albumData.updateAlbum(req.params.id, updatedData);
		res.json(updatedalbum);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await albumData.getAlbumById(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'album not found' });
		return;
	}
	try {
		await albumData.removeAlbum(req.params.id);
		res.sendStatus(200);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

module.exports = router;
