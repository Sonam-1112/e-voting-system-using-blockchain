var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/table_view', function(req, res, next) {
    var sql='SELECT * FROM registered_users where account_address!="0xD1543eB0eF347988611E68039D831f7C50798211"';
    db.query(sql, (err, data, fields) =>{
    if (err) 
    {
        console.log(err);
    }
    
    
    
    //console.log(typeof(myarray))
    // console.log(data)
    res.render('adminVoterReg', { title: 'Registered Users List', userData: data});

  });
});
module.exports = router;