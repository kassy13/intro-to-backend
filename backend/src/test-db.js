import dotenv from 'dotenv';
import connectDB from './config/database.js';

dotenv.config({
    path: `${process.cwd()}/.env`
});

console.log("Testing DB Connection...");
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "Defined" : "Undefined");

connectDB().then(() => {
    console.log("Test finished.");
    process.exit(0);
});
