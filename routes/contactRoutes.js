const express = require("express");
const router = express.Router();
const validateToken=require("../middleware/validateTokenHandler");
const {
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact
} = require("../controllers/contactControllers");
router.use(validateToken);
// Route definitions
router.route("/") 
    .get(getContacts)           // Handle GET for all contacts
    .post(createContact);       // Handle POST to create a new contact

router.route("/:id")
    .get(getContact)           // Handle GET for a specific contact by ID
    .put(updateContact)        // Handle PUT to update a specific contact by ID
    .delete(deleteContact);    // Handle DELETE for a specific contact by ID

module.exports = router;
