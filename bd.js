const sqlite3 = require('sqlite3').verbose();
var newSqlite3CB = function(err){
	console.log(err);
}

	let db = new sqlite3.Database(':memory', (err) => {
		if (err) {
			return console.error(err.message);
		}
		console.log('Connected to the in-memory SQlite database.');
	});

db.close();