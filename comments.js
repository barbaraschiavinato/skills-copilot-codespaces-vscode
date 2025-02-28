// Create web server
// Create a comment
// Read all comments
// Read a comment
// Update a comment
// Delete a comment

// Dependencies
const express = require('express');
const Joi = require('joi');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { getComments, writeComments } = require('../utils/comments');

// Create web server
const router = express.Router();

