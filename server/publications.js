Meteor.publish('posts', function(options){
  return Posts.find({}, options);
});

Meteor.publish('users', function(){
  return Meteor.users.find();
});

Meteor.publish('comments', function(postId){
  return Comments.find({postId: postId});
});
