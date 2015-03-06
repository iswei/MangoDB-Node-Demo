/**
 * Created by linwei on 3/5/2015.
 * This page can run without mongooose node dependency, it requires mongoose-simpledb
 * Mongoose lacks coherent pattern to follow when develop first time according to Alex Ford
 * remove mongoose by using: rm -r node_modules/mongoose
 * install mongoose-simpledb by Alex Ford using npm install mongoose-simpledb
 */



var simpledb = require('mongoose-simpledb');

//default connects to mongoose//localchost/mongoose-simpledb-test
//name of the Kitten.js is the model
simpledb.init(function(err, db){
    "use strict";
    if(err) return console.error(err);
    //you can safely assume that db is populated with your models

    db.Kitten.findOne({'name.first': 'Koda'}, function (err,koda){
        if(err) return console.err(err);
        koda.speak();

       /*
        console.log(koda);
        koda.name.last = 'Ford'; //change Koda Bug last name to Koda Ford
        koda.save(function(err){
            if(err) return console.error(err);
            console.log(koda);
        });
        */
    });
 /*
    var koda = new db.Kitten({
        name: {
            first: 'Koda',
            last: 'Bug'
        },
        age:3
    });
    koda.save();

  */
})