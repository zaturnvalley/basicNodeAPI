module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // Create note
    res.send('Hi');
  });
}