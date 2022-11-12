var express = require('express');

var router = express.Router();
var db=require('../database');
var app = express();
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
/* GET users listing. */
router.get('/adlogin', function(req, res, next) {
  res.render('admin_login.ejs');
});


router.post('/adlogin', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;

    // var sql='SELECT * FROM registration WHERE email_address =? AND password =?';
    // db.query(sql, ["201903015.sonamgbu@student.xavier.ac.in", "GuptaSonam@9594635284"], function (err, data, fields) {
    //     if(err) console.log(err);
    //     if(data.length>0){
    //         console.log( "DATTTTTTTTTTTT",data[0].email_address)
    //         if(data.email_address=="201903015.sonamgbu@student.xavier.ac.in" && data.password=="GuptaSonam@9594635284"){
    //         console.log("Truuuuuu")
    //         req.session.loggedinUser= true;
    //         req.session.emailAddress= emailAddress;
    //         res.redirect('/addCandidate');
    //         }
    //         else{
    //             res.render('admin_login.ejs',{alertMsg:"Your Email Address or password is wrong"});
    //         }
    //     }else{
    //         res.render('admin_login.ejs',{alertMsg:"Your Email Address or password is wrong"});
    //     }
    // })
    if(emailAddress=="201903015.sonamgbu@student.xavier.ac.in" && password=="GuptaSonam@9594635284"){
        console.log("Truuuuuu")
            req.session.loggedinUser= true;
            req.session.emailAddress= emailAddress;
            res.redirect('/addCandidate');
    }
    else{
        res.render('admin_login.ejs',{alertMsg:"Your Email Address or password is wrong"});
    }
})

module.exports = router;

