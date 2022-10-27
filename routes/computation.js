var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value: `math.cos() applied to ${x} is ${Math.cos(x)}`,
    value1: `math.asin() applied to ${x} is ${Math.asin(x)}` ,
    value2: `math.asinh() applied to ${x} is ${Math.asinh(x)}` });
  }
  else{

    for (let output in req.query) {

      console.log(output)

      res.render('computation', { value: `math.cos() applied to ${req.query[output]} is ${Math.cos(req.query[output])}`,
      value1: `math.asin() applied to ${req.query[output]} is ${Math.asin(req.query[output])}` ,
      value2: `math.asinh() applied to ${req.query[output]} is ${Math.asinh(req.query[output])}` })

    }
  }


});


module.exports = router;