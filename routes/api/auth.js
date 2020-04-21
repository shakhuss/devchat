const express = require("express");
const router = express.Router();
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

router.get("/", (req, res) => res.send("Auth Route Initialized"));

module.exports = router;
