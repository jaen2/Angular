var removeDocument = function(db, callback){
  var collection = db.collection('account');
  collection.deleteOne({a:3}, function(err, result){
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the documnet with the field equal to 3");
    callback(result);
    db.close();
  });
}

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        console.log("connected successfully to server");

        removeDocument(db, function(err, db){
                //db.close();
        });
});

//{a:3}과 일치하는 document 하나를 지운다.
