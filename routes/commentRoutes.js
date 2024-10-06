const express = require('express');
const { addComment } = require('../controllers/commentController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, addComment);

module.exports = router;
