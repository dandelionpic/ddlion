var express = require('express');
var router = express.Router();
var request = require('request');
var model = require('../model/model');
var Comment = model.getModel('comments');


router.get('/comments',function(req, res){
  Comment.find({},function(err,doc){
    return res.json({code:0,data:doc})
  })
})

router.get('/delete/comments',function(req, res){
  Comment.deleteMany({}, function(err){
      if (err) return handleError(err);
  })
})

router.post('/comments', function(req, res, next) {

  var data = req.body;
  var comment_new = new Comment({
    name: data.name,
    email: data.email,
    message: data.message
  });

  comment_new.save(function(err, comment){
     if (err) {
        return res.json({code:1, msg:'save comments error'});
     }else{
        return res.json({code:0, name: comment.name});
     }
  });
});


module.exports = router;
