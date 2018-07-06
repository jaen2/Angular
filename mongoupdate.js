var updateDocument = function(db, callback){
	var collection = db.collection('account');
	collection.updateOne({a:2}, {$set: {b:1}}, function(err, result){	// 1
		assert.equal(err, null);
		assert.equal(1, result.result.n);
		console.log("Updated the document with the field 'a' equals to 2");
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

        updateDocument(db, function(err, db){

        });
});


// {a:2}와 일치하는 document 하나를 찾아서 그 document에 {b:1}을 더했다.
