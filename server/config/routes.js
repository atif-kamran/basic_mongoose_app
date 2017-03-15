var otters = require('../controllers/otters.js')

module.exports = function(app) {
  app.get('/', function(req, res) {
    otters.show(req, res)
  }),

  app.get('/otters/new', function(req, res) {
    res.render('new');
  }),

  app.post('/otters', function(req, res) {
    otters.create(req, res)
  }),

  app.get('/otters/:id', function(req, res){
    otters.show_specific(req, res)
  }),

  app.get('/otters/:id/edit', function(req, res){
    otters.specific_for_edit(req, res)
  }),

  app.post('/otters/:id/edit', function(req, res){
    otters.edit(req, res)
  }),

  app.post('/otters/:id/destroy', function(req, res){
    otters.destroy(req, res)
  })
}
