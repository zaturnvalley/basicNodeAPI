// Require express and router
const express = require('express');
const router = express.Router();

// HTTP methods (CRUD)
router.get('/', (req, res) => {
  res.send('GET');
});

router.post('/', (res, req, next) => {
  res.send('POST');
});

router.delete('/:id', (req, res, next) => {
  res.send('DELETE');
});

module.exports = router;