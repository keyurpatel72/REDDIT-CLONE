const express  = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const {createPost,upvotePost,downvotePost} =require('../controllers/postController')


router.post('/',auth,createPost);
router.post('/:id/upvote',auth,upvotePost);
router.post('/:id/downvote',auth,downvotePost);


module.exports = router;