const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
//without bcrypt
const User = require('../../models/User');

//REGISTER
// @route    POST api/auth
// @desc     Register user
// @access   Private
router.post(
    '/',
    async (req, res) => {
  
      const { name, email, password } = req.body;
      if(!name || !email || !password ) {
        return res.status(400).json({msg: 'Fill in all fields'});
      }
    
      if(password.length < 5) {
        return res.status(400).json({msg: "Your password should be at least 5 characters long"});
      }
    
      if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
        return res.status(400).json({msg: "Not valid email format"})
      }  

      try {
        let user = await User.findOne({ email });
  
        if (user) {
          return res
            .status(400)
            .json({ msg: 'User already exists' });
        }
 
        user = new User({
          name,
          email,
          password
        });
  
        await user.save();
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );

  
  
  module.exports = router;