const meRoute = require('./route');  
const constructorMethod = (app) => { 
 
    app.use('/', meRoute);
   
    app.use('*', (req, res) => {   
        res.status(404).json({ error: 'Not found' });  
    }); 
};  
module.exports = constructorMethod;