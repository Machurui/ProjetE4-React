const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


/* CORS */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


/* Routes */

app.post('/newpartie', (req, res) => {
    console.log(req.body);
    //Ajouter CP à true

});


app.post('/joinpartie', (req, res) => {
    console.log(req.body);
    //Ajouter CP à false

});


/* Listen 2000 */
app.listen(2000, () => {
    console.log('Listen on');
});
