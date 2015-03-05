/**
 * Created by linwei on 3/5/2015.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

/*for multiple db connection, always use following */
//var connection = mongoose.createConnection("connString");

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
    // yay, db open and ready!

    var kittySchema = mongoose.Schema({
        name: String
    });

    var Kitten = mongoose.model('Kitten', kittySchema);
    Kitten.findOne({name: 'Koda'}, function(err,koda){
        "use strict";
        if(err) return console.error(err);
        console.log(koda.name);

//rename Koda to Koda Bug and save to MongoDB
        koda.name = "Koda Bug";
        koda.save(function(err){
            if(err) return console.log(err);
            console.log("Koda document saved success");
        });

    });
});

