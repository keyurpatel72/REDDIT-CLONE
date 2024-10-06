const express = require('express');
const connectDB = require('./config.js/db');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

//lord env
dotenv.config();

//db connection
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(helmet());

app.use(cors());

//routes

app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/subreddits',require('./routes/subredditRoutes'));
app.use('/api/posts',require('./routes/postRoutes'));
app.use('/api/comments',require('./routes/commentRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));