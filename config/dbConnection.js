const mongoose = require("mongoose");

// Define an asynchronous function to connect to MongoDB
const connectDb = async () => {
    try {
        // Attempt to connect to MongoDB using the connection string from the environment variables
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);

        // Log a success message if the connection is established
        console.log("Database connected:", connect.connection.host);
    } catch (err) {
        // Log any error encountered during the connection attempt
        console.error("Database connection failed:", err);
        
        // Exit the process with a failure code (1) if connection fails
        process.exit(1);
    }
}

// Export the connectDb function so it can be used in other parts of the application
module.exports = connectDb;
