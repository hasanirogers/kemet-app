var express = require('express'),
    path = require('path'),
    router = express.Router();

if (process.env.NODE_ENV == 'development') {
  router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'app/index.html'));
  });
} else {
  router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'build/es5-bundle/app/index.html'));
  });
}

module.exports = router;
