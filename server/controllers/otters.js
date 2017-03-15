var mongoose = require('mongoose');
var Otter = mongoose.model('Otter');

module.exports = {
  show: function(req, res){
    Otter.find({}, function(err, results){
      if (err) {console.log(err); }

      res.render('index', {otters: results});
    });
  },

  create: function(req, res){
    console.log("POST DATA", req.body);
    var otter = new Otter({name: req.body.name, age: req.body.age});
    otter.save(function(err) {
      if(err) {
        console.log('something went wrong');
      }
      else {
        console.log('successfully added an otter!');
        // This is where we would add the user from req.body to the database.
        res.redirect('/');
      }
    })
  },

  show_specific: function(req, res){
    Otter.find({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.render('show', { otter: result[0]});
    });
  },

  specific_for_edit: function(req, res){
    Otter.find({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.render('edit', { otter: result[0]});
    });
  },

  edit: function(req, res){
    Otter.update({ _id: req.params.id }, req.body, function(err, result){
      console.log("POST DATA", req.body);
      if (err) {console.log(err); }
      res.redirect('/');
    });
  },

  destroy: function(req, res){
    Otter.remove({ _id: req.params.id }, function(err, result){
      if (err){ console.log(err); }
      res.redirect('/');
    });
  }

}
