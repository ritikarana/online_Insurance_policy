const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors')

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors)

// Middleware for 
app.use(express.json());

// Placeholder route
app.get('/', (req, res) => res.send('API is running...'));

// Routes
app.use('/api/auth', require('./routes/userRoutes'));
app.use('/api/policies', require('./routes/policyRoutes'));
app.use('/api/quotes', require('./routes/quoteRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
