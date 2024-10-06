Reddit Clone Backend

This is the backend for a Reddit-like social platform built using Node.js, Express, and MongoDB. It provides users with features like user authentication, post creation, subreddit creation, voting on posts, and commenting. The app uses JWT for authentication and Mongoose for data modeling and interactions with MongoDB.
Features

    User Authentication (Register, Login) using JWT
    Subreddit Creation to organize posts by topics
    Post Creation and text content submission
    Voting System (Upvote/Downvote posts)
    Commenting on posts
    Helmet.js for securing HTTP headers
    bcrypt for secure password hashing

Technologies Used

    Node.js: Server-side JavaScript runtime
    Express.js: Web framework for Node.js
    MongoDB: NoSQL database for data storage
    Mongoose: MongoDB object modeling for Node.js
    JWT: JSON Web Tokens for authentication
    bcrypt.js: For secure password hashing
    Helmet.js: Security middleware for HTTP headers
    Cors: Enable cross-origin resource sharing


    Register: POST /api/auth/register
    Body:
{
  "username": "keyur",
  "email": "keyur@example.com",
  "password": "123456"
}


Login: POST /api/auth/login
    Body:
{
  "email": "john@example.com",
  "password": "123456"
}

Create Subreddit: POST /api/subreddits
Body:
{
  "name": "webdev",
  "description": "A subreddit for web development"
}

Create Post: POST /api/posts
Body
{
  "title": "My First Post",
  "body": "This is the content of my first post.",
  "subreddit": "subreddit_id"
}
Upvote Post: POST /api/posts/:id/upvote
Requires JWT token in x-auth-token header.

Downvote Post: POST /api/posts/:id/downvote
Requires JWT token in x-auth-token header.

Add Comment: POST /api/comments
Requires JWT token in x-auth-token header.

Body
{
  "postId": "post_id",
  "text": "This is a comment."
}
