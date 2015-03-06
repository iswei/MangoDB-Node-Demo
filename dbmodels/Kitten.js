
/**
 * Created by linwei on 3/6/2015.
 * mongoose-smipledb schema
 */

//define schema of Kitten Model
exports.schema = {
    //_id: Number,  <== if this is used, it cause simpledb to use auto-increment plugin on _id for new document
    name: {
        first: String,
        last: String
    },
    age: Number
};

//define virtual

exports.virtuals = {
    'name.full':{
        get: function(){
            "use strict";
            return this.name.first + " " + this.name.last;
        },
        set: function(fullName){
            "use strict";
            //string contains a space
            if(fullName.indexOf(' ') !== -1){
                var segments = fullName.split(' '),
                    first = segments[0],
                    last = segments[1];
                this.name.first = first;
                this.name.last = last;
            } else{
                this.name.first = fullName;
                this.name.last = '';
            }
        }
    }
}
//define Method speak
exports.methods = {
    speak: function(){
        "use strict";
        console.log("My name is %s and I am %s old", this.name.full, this.age);

    }
}