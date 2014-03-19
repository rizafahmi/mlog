var requireLogin = function() {
  if(!Meteor.userId()){
    Router.go('loginPage');
    this.stop();
  }

};
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function(){
  this.route('postsList', {
    path: '/:postsLimit?',
    waitOn: function() {
      var postsLimit = parseInt(this.params.postsLimit) || 5;
      return Meteor.subscribe('posts', {sort: {datePublish: -1}, limit: postsLimit});
    },
    data:
      function() {
        var limit = parseInt(this.params.postsLimit) || 5;
        return { posts: Posts.find({}, {sort: {submitted: -1}, limit: limit})
        };
      }
});

  this.route('postPage', {
    path: '/posts/:_id',
    waitOn: function(){
      return Meteor.subscribe('comments', this.params._id);
    },
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });

  this.route('loginPage', {
    path: '/login'
  });

  this.route('registerPage', {
    path: '/register'
  });

  this.route('postSubmit', {
    path: '/submit',
    layoutTemplate: 'layoutAdmin',

    before: requireLogin

  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    layoutTemplate: 'layoutAdmin',
    data: function() {
      return Posts.findOne(this.params._id);
    },
    before: requireLogin
  });
});

