import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './app.js';

// Load environment variables from .env file in all environments
dotenv.config({
    path: `${process.cwd()}/.env`,
});
const startServer = async () => {
    try {
        await connectDB();
        // **TYPO FIXED HERE**
        app.on('error', (err) => {
            // Removed the extra closing parenthesis after (err)
            console.log('ERROR', err); // Added 'err' to the log for more context
            throw err;
        });

        // start listening for connections here, e.g.:
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log('Error connecting to the database or starting server:', error); // Added context to the error log
    }
};

startServer(); //call the function to start the server!
