var insertDocument = function(db, callback){				// 1
        var collection = db.collection('account');			// 2
        collection.insertMany([
          {a : 3},
          {a : 4},
          {a : 5}
        ], function(err, result){
                assert.equal(err, null);
                assert.equal(3, result.result.n);			// 4
                assert.equal(3, result.ops.length);			// 4
                console.log("Inserted 3 document into the collection");
                callback(result);					// 5
        });
}

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db){
        assert.equal(null, err);
        console.log("connected successfully to server");

	insertDocument(db, function(){					// 6
		db.close();						// 7
	});
});
