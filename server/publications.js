Meteor.publish('posts', function(){
  return Posts.find();
});

Meteor.publish('users', function(){
  return Meteor.users.find();
});
