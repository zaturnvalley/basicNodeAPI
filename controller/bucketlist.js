// Require express and router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET');
});

module.exports = router;