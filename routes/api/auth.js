const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

//REGISTER
// @route    POST api/auth
// @desc     Register user
// @access   Private

