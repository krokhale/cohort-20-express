var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/something', function(req, res, next) {
  // you are supposed to write code here that maybe fetches information from the DB
  // once done

  // console.log('the request object is', req)

  setTimeout(() => {
    res.send('respond with a resource');
    res.json()
  }, 5000)

});

module.exports = router;
