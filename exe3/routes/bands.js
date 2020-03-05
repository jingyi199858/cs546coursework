const express = require("express");
const router = express.Router();
const data = require("../data");
const bands = data.bands;

router.get('/:id', async (req, res) => {  
  try {   
      const band = await bands.getBands(req.params.id);
      res.json(band);  
  } catch (e) {   
      res.status(404).json({ message: 'band not found' });  
  } 
});  

router.get('/', async (req, res) => {  
  try {   
      const bandList = await bands.getAllBands();   
      res.json(bandList);  
  } catch (e) {   
      res.status(500).send();  
  } 
}); 
module.exports= router