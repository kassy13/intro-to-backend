import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n Successfully connected to mongodb  
            ${connectionInstance.connection.host}`)

    } catch (err) {
        console.log("Failed to connect to mongo db", err);
        process.exit(1)
    }
}
export default connectDB;