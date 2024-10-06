const Post = require('../models/Post');

// Create Post
exports.createPost = async (req, res) => {
  const { title, body, subreddit } = req.body;
  try {
    const post = new Post({
      title,
      body,
      subreddit,
      user: req.user.id,
    });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Upvote Post
exports.upvotePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.upvotes.includes(req.user.id)) {
      post.upvotes.push(req.user.id);
      post.downvotes = post.downvotes.filter(id => id.toString() !== req.user.id);
    }
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Downvote Post
exports.downvotePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.downvotes.includes(req.user.id)) {
      post.downvotes.push(req.user.id);
      post.upvotes = post.upvotes.filter(id => id.toString() !== req.user.id);
    }
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
