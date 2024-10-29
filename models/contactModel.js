const mongoose = require("mongoose");

// Define the schema for the Contacts collection with validation rules
const contactSchema = mongoose.Schema({
    name: {
        type: String,                         // Data type: String
        required: [true, "Please add contact name"], // Field is required with custom error message
    },
    email: {
        type: String,                         // Data type: String
        required: [true, "Please add contact email"], // Field is required with custom error message
        unique: true                          // Ensures the email value is unique across documents
    },
    phone: {
        type: String,                         // Data type: String
        required: [true, "Please add contact phone number"], // Field is required with custom error message
    },
}, {
    timestamps: true                           // Adds `createdAt` and `updatedAt` fields automatically
});

// Export the schema as a Mongoose model, allowing CRUD operations on the "Contacts" collection
module.exports = mongoose.model("Contacts", contactSchema);
//Contacts->Our defined name for schema
