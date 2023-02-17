var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This secction should show something about user');
});

router.get('/details', function(req, res, next) {
  res.send('This is details user');
});

module.exports = router;
