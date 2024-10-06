const Comment = require('../models/Comment');

// Add Comment to Post
exports.addComment = async (req, res) => {
  const { postId, text } = req.body;
  try {
    const comment = new Comment({
      postId,
      text,
      user: req.user.id,
    });
    await comment.save();
    res.json(comment);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
