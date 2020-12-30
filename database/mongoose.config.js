require('dotenv').config();
const mongoose = require('mongoose');

// These are development variables and don't need to be srored in a .env file until production
const DB_ADDRESS = process.env.DATABASE_IP || 'localhost';
const DB_PORT = process.env.DATABASE_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_AUTH_NAME = process.env.DB_AUTH_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Connection Check
console.log(`Connecting to IP: ${DB_ADDRESS}, Database: ${DB_NAME}`);

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_ADDRESS}:${DB_PORT}/${DB_NAME}?authSource=${DB_AUTH_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('REMOTEREQ DATABASE CONENCTION SUCCESSFUL!');
});

module.exports = mongoose;