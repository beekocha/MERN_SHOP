const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Item = require('../../models/Item')
const User = require('../../models/User')
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

// @route    POST api/items/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  '/comment/:id',
    auth,
    async (req, res) => {  
      const {text} = req.body;
      if(!text) {
        return res.status(400).json({msg: 'Fill in all fields'});
      }
    try {
      let user = await User.findById(req.user.id).select('-password');
      console.log(req.user.id)
      let item = await Item.findById(req.params.id);

      const newComment = {
        text: req.body,
        name: user.name,
        user: req.user.id
      };
      item.comments.unshift(newComment);

      await item.save();

      res.json(item.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
// @desc     Delete comment
// @access   Private
router.delete('/comment/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    // Pull out comment
    const comment = item.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = item.comments
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    item.comments.splice(removeIndex, 1);

    await item.save();

    res.json(item.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;