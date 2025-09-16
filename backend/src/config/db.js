const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://jothijai2004:<db_password>@cluster0.gnju0yg.mongodb.net/';
    const dbName = process.env.MONGODB_DB || 'partner_management';

    const conn = await mongoose.connect(uri, {
      dbName
    });

    console.log(`MongoDB Connected: ${conn.connection.host}/${dbName}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
