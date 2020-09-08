//Yi Jing
//Mar 18, 2020
const express = require('express');
const router = express.Router();
const data = require('../data');
const bandData = data.bands;

router.get('/:id', async (req, res) => {
  try {
    let band = await bandData.getBandByID(req.params.id);
    res.json(band);
  } catch (e) {
    res.status(404).json({error: 'Band not found'});
  }
});

router.get('/', async (req, res) => {
  try {
    let bandList = await bandData.getAllBands();
    res.json(bandList);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  let bandInfo = req.body;

  if (!bandInfo) {
    res.status(400).json({error: 'You must provide data to create a band'});
    return;
  }

  if (!bandInfo.bandName) {
    res.status(400).json({error: 'You must provide bandName'});
    return;
  }

  if (!bandInfo.bandMembers) {
    res.status(400).json({error: 'You must provide bandMembers'});
    return;
  }

  if (!bandInfo.yearFormed) {
    res.status(400).json({error: 'You must provide yearFormed'});
    return;
  }

  if (!bandInfo.genres) {
    res.status(400).json({error: 'You must provide genres'});
    return;
  }

  if (!bandInfo.recordLabel) {
    res.status(400).json({error: 'You must provide recordLabel'});
    return;
  }

  try {
    const newband = await bandData.addBand(bandInfo.bandName, bandInfo.bandMembers, bandInfo.yearFormed, bandInfo.genres, bandInfo.recordLabel);
    res.json(newband);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  let bandInfo = req.body;

  if (!bandInfo) {
    res.status(400).json({error: 'You must provide data to create a band'});
    return;
  }

  if (!bandInfo.bandName) {
    res.status(400).json({error: 'You must provide bandName'});
    return;
  }

  if (!bandInfo.bandMembers) {
    res.status(400).json({error: 'You must provide bandMembers'});
    return;
  }

  if (!bandInfo.yearFormed) {
    res.status(400).json({error: 'You must provide yearFormed'});
    return;
  }

  if (!bandInfo.genres) {
    res.status(400).json({error: 'You must provide genres'});
    return;
  }

  if (!bandInfo.recordLabel) {
    res.status(400).json({error: 'You must provide recordLabel'});
    return;
  }

  try {
    await bandData.getBandByID(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'band not found'});
    return;
  }
  try {
    const updatedband = await bandData.updateBand(req.params.id, bandInfo);
    res.json(updatedband);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await bandData.getBandByID(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'band not found'});
    return;
  }

  try {
    await bandData.removeBand(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
