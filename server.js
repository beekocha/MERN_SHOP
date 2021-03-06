const express = require('express'); 
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Database connecting
connectDB();
//Middleware connecting
app.use(express.json({ extended: false }));
//routes

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/items', require('./routes/api/items'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('react-shop/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'react-shop', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Port is here, ${PORT}`));