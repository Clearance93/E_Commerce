
var express = require('express');
var router = express.Router();
var Kids = require('../Models/Kids');


router.get('/kids', (req, res) => {
    Kids.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

router.post('/kids', (req, res) => {
    Kids.create((req.body), (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


module.exports = router;