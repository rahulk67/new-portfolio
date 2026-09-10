const express = require("express");

const {
  createContact,
  getContacts,
} = require("../controller/contactController");

const router = express.Router();

// Public - portfolio contact form
router.post("/", createContact);

// Admin/private - get contacts
router.get("/", getContacts);

module.exports = router;