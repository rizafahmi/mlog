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

PostsListController = RouteController.extend({
  template: 'postsList',
  increment: 5,
  limit: function(){
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function(){
                 return {sort: {datePublish: -1}, limit: this.limit()}
               },
  waitOn: function(){
            return Meteor.subscribe('posts', this.findOptions());
          },
  data: function() {
          return {posts: Posts.find({}, this.findOptions())};
        }
});

Router.map(function(){
  this.route('postsList', {
    path: '/:postsLimit?',
    controller: PostsListController
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

