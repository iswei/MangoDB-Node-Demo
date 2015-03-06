var express = require('express');
var router = express.Router();
var simpledb = require('mongoose-simpledb');

var db = simpledb.init('mongodb://localhost/test');
console.log(db);
/* GET home page. */
router.get('/', function(req, res, next) {
   db.Kitten.findOne({ 'name.first':'Koda'},function(err,koda){
       "use strict";
       if(err)console.error(err);
       if(!koda) return console.error(new Error("No document found"));
       res.render('index', { koda:koda, title:'node mongodb' });
   });
});

router.post('/createKitten', function(req,res){
    "use strict";
    db.Kitten.findById(req.param('_id'), function(err, koda){
        if(err) return console.error(err);
        if(!koda) return res.send("Could not find kitten..");
        koda.name.first = req.param('firstName');
        console.log(req.param('firstName'));
        koda.name.last = req.param('lastName');
        console.log(req.param('lastName'));
        koda.age = parseInt(req.param('age'));
        koda.save();
        res.render('index', { koda:koda, title:'Koda bug saved!' });
    })
});

module.exports = router;
