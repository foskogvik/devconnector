const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoBD Connected...');
  } catch (error) {
    console.log(error.message);
    // exits process with failure message
    process.exit(1);
  }
};

module.exports = connectDB;
