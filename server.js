const express = require('express'); 
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Database connecting
connectDB();
//Middleware connecting
app.use(express.json({ extended: false }));
//routes
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/items', require('./routes/api/items'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Port is here, ${PORT}`));