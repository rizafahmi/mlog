var requireLogin = function() {
  if(!Meteor.userId()){
    Router.go('loginPage');
    this.stop();
  }

};
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){
    return [Meteor.subscribe('posts'),
  Meteor.subscribe('comments')]
  }
});

Router.map(function(){
  this.route('postsList', {
    path: '/'});

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

