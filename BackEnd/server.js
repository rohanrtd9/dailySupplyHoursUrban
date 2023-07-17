require('dotenv').config();
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const districtRoutes = require('./routes/districtRoutes');
const dailySupplyRoutes = require('./routes/districtSupplyRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Set appropriate headers to curb CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST"
  );
  next();
});
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Routes
app.use('/districts', districtRoutes);
app.use('/dailySupply', dailySupplyRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
