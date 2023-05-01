const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

//user can have many comments, and a comment only belongs to one user
User.hasMany(Comment);
Comment.belongsTo(User);

//user can have many posts, and a post only belongs to one user
User.hasMany(Post);
Post.belongsTo(User);

//Posts can have many comments, and a comment can only belong to one post
Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = {
    Comment,
    Post,
    User
}