var mysql = require('mysql');


var rdsUrl = 'hotel-app-database.cluster-cu7axdzc3ifb.eu-west-1.rds.amazonaws.com';
var password =  'Password#123';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
