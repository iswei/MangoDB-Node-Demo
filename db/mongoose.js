
/**
 * Created by linwei on 3/5/2015.
 *
 * This page requires node moongoose dependency, install using npm install mongoose
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
        name: {
            first: String,
            last: String
        },
        age: Number
    });
//virtual is not save to database, but the key will exist in the model
    kittySchema.virtual('name.full').get(function(){
        "use strict";
       return this.name.first + " " + this.name.last;
    });
//method needs to be added to the schema before compiling with model()
    kittySchema.methods.speak = function () {
        var greeting = "Meow name is " + this.name.full;
        greeting += " and I am " + this.age + " years old.";
        console.log(greeting);
    }

    var Kitten = mongoose.model('Kitten', kittySchema)
/**
    Kitten.findOne({"age":3}, function(err, koda){
        "use strict";
        if(err)return console.error(err);
        console.log(koda.name.full);
        koda.speak();
    });



    var koda = new Kitten({
        name: {
            first: 'Koda',
            last: 'Bug'
        },
        age: 3
    });

    koda.save();


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

**/
});

