const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// mongodb connection
mongoose.connect(process.env.MONGO_URI  )
.then(()=> console.log(`MongoDB Connected!`))
.catch((err)=> console.log(`MongoDB Connection Error : ${err}`));
