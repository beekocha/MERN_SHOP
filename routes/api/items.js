const express = require('express');
const router = express.Router();

const Item = require('../../models/Item')

// @route    POST api/item
// @desc     Create an  item
// @access   Private

router.post('/', (req, res) => {
    const newItem = new Item({
      pic: req.body.pic,
      name: req.body.name,
      desc: req.body.desc,
      section: req.body.section,
      cost: parseInt(req.body.cost)
    });
    newItem.save().then(item => res.json(item));
  });

// @route     GET api/items
// @desc      Get items list
// @acces     Public
router.get('/', (req, res) => {
  Item.find().then(items => res.json(items))
});

  module.exports = router;