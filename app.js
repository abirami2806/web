const exp = require('constants');
const express = require('express');
const path = require('path');

let app = express();
let staticPath = path.join(__dirname + '/public');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(staticPath);
});

app.listen(5000, ()=> {console.log('Server running on Port 5000')});