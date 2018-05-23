var express = require('express'),
    router = express.Router();

router.get('/:name', function(request, responds) {

  var pagedata = {
    title: 'Templates',
    slug: request.params.name
  };

  return responds.render(request.params.name, pagedata);
});

module.exports = router;
