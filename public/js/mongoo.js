var mongoose = require('mongoose');

//Connect to the Database (use db)
mongoose.connect('mongodb://localhost/YOGO');

// Mongoose expects us to provide SCHEMA for our Documents/Collections
// We need to specify WHAT a document looks like
// And then, name the collection those documents should live in

// Create Document Schema
var StudiosSchema = mongoose.Schema({
  name        : {type : String, unique : true},
  zip: String,
  type : String,
  coords: [Number, Number],
});
// unqiue, required, default => very useful Schema paramters

// Create the collection and hand off the document schema
var Studio = mongoose.model("Studio", StudiosSchema);
// Studio becomes our entry point into the collection
// db.Studios

// // Creates a new Studio document in the Studios collection
var breathe = new Studio({
name : 'breathe yoga',
zip : '80304',
type : 'Vinyasa',
coords : [-105.278991, 40.054365]
});

var YogaPod = new Studio({
name : 'Yoga Pod',
zip : '80301',
type : 'Power',
coords : [-105.25523, 40.017805]
  
});

// // Actually save it to the DB
breathe.save((err, Studio)=>{
console.log(err, Studio);
  YogaPod.save((err, Studio)=>{
    console.log(err, Studio);
  })
});
console.log('After Save!');


// Other Mongoose Methods

// Find -  returns an ARRAY of DOCUMENTS
// Elf.find({}, (err, elves)=>{
//   console.log('Err : ', err);
// //   console.log('Evles : ', elves);
  
//   console.log(elves.map((elf)=>{
//     return elf.name
//   }));
  
// });