module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // Create note
    console.log(req.body);
    res.send('Hi');
  });
}