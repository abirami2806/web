var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/employee');
var con = mongoose.connection;
con.on('error', () => { console.log("error") });
con.once('open', () => { console.log("connected successfully") });
var app = express()
app.use(express.static('public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))
app.get('/', (req, res) => {
    return res.redirect('employee.html');
})
app.post('/reg', (req, res) => {
    var a = req.body.name;
    var b = req.body.password;
    var c = req.body.phone;
    var data = {
        "name": a,
        "password": b,
        "phone": c
    };

    con.collection('maaya').insertOne(data);

})
app.listen(5000);
