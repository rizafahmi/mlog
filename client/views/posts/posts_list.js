Template.postsList.helpers({
  posts: function() {
           return Posts.find({}, {sort: {datePublish: -1}});
         }
});
