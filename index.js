var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
  res.render(login);
})

// Dashboard
router.get('/dashboard', (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
