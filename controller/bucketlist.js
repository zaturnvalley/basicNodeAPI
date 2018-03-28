// Require express and router
const express = require('express');
const router = express.Router();
const bucketlist = require('../models/List');

// HTTP methods (CRUD)
router.get('/', (req, res) => {
  bucketlist.getAllLists((err, lists) => {
    if(err) {
      res.json({ success: false, message: `Failed to load all lists. Error: ${err}`});
    } else {
      res.write(JSON.stringify({ success: true, lists: lists}, null, 2 ));
      res.end();
    }
  })
});

router.post('/', (res, req, next) => {
  let newList = new bucketlist({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category
  });
  bucketlist.addList(newList, (err, list) => {
    if(err) {
      res.json({ success: false, message: `Failed to create new list. Error: ${err}`});
    } else {
      res.json({ success: true, message: 'Added successfully.'});
    }
  });
});

router.delete('/:id', (req, res, next) => {
  res.send('DELETE');
});

module.exports = router;