const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({msg: 'Acces denied, try again'})
  try{
  const decoded = jwt.verify(token, require('../config/default.json').jwtSecret);
  req.user = decoded;
  next();
} catch(e) {
  res.status(400).json({msg: `Token is not valid or expired`})
}
}


module.exports = auth;