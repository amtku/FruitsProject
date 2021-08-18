//jshint esversion:6

const mongoose = require('mongoose');
// Connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true} );

const fruitSchema = new mongoose.Schema ({
  name : String,
  rating : {
    type : Number,
    min : 1,
    max : 10
  },
  review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name : "Apple",
  rating : 34,
  review : "Pretty solid as a fruit"
});

fruit.save();

const personSchema = new mongoose.Schema ({
  name : String,
  age : Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name : "John",
  age : 37
});

// person.save();



// const kiwi = new Fruit ({
//   name : "Kiwi",
//   score : 10,
//   review : "The best fruit"
// });
//
// const orange = new Fruit ({
//   name : "Orange",
//   score : 4,
//   review : "Too sour for me"
// });
//
// const banana = new Fruit ({
//   name : "Banana",
//   score : 3,
//   review : "Weired texture"
// });

// Fruit.insertMany([kiwi, orange,banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});




// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {
//       name : "Apple",
//       score: 8,
//       review: "Great fruit"
//     },
//     {
//       name : "Orange",
//       score: 6,
//       review: "Kinda sour"
//     },
//     {
//       name : "Banana",
//       score: 9,
//       review: "Great stuff"
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }


// const insertDocuments = function(db,callback) {
//   // Get the documents collection
//   const collection = db.collection ('fruits');
//   // Insert some documents
//   collection.insertMany ( [
//     {
//       name : "Apple",
//       score: 8,
//       review: "Great fruit"
//     },
//     {
//       name : "Orange",
//       score: 6,
//       review: "Kinda sour"
//     },
//     {
//       name : "Banana",
//       score: 9,
//       review: "Great stuff"
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.lenght);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };
