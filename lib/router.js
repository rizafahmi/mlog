Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){
    return Meteor.subscribe('posts');
  }
});

Router.map(function(){
  this.route('postsList', {
    path: '/'});

  this.route('postPage', {
    path: '/posts/:_id',
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

    before: function() {
      if(!Meteor.userId()){
        Router.go('loginPage');
        this.stop();
      }
    }
  });
});
