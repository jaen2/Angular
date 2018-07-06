
var indexCollection = function(db, callback){
  db.collection('account').createIndex({"a": 1}, function(err, results){
    console.log(results);
    callback();
    db.close();
  });
}



var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        console.log("connected successfully to server");

        indexCollection(db, function(err, db){
                //db.close();
        });
});
