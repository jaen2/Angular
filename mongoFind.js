var findDocument = function(db, callback){
  var collection = db.collection('account');
  collection.find({'a' : 1}).toArray(function(err, docs){
    assert.equal(err,null);
    console.log("Found the following document");
    console.log(docs);
    callback(docs);
    //db.close();
  });
}

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        console.log("connected successfully to server");

        findDocument(db, function(){
               db.close();
        });
});
