const mongoose = require('mongoose');

const DB = process.env.DATABASE  ;

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => console.log('MongoDB connection successful')).catch((err) => {
  console.log('MongoDB connection error:', err);
});