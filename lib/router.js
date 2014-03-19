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
  posts: function(){
          return Posts.find({}, this.findOptions());
         },
  data: function() {
          var hasMore = this.posts().fetch().length === this.limit();
          var nextPath = this.route.path({postsLimit: this.limit() + this.increment});
          return {
            posts: this.posts(),
            nextPath: hasMore ? nextPath : null
          };
        }
});

Router.map(function(){
  this.route('loginPage', {
    path: '/login'
  });

  this.route('registerPage', {
    path: '/register'
  });


  this.route('postEdit', {
    path: '/posts/:_id/edit',
    layoutTemplate: 'layoutAdmin',
    data: function() {
      return Posts.findOne(this.params._id);
    },
    before: requireLogin
  });
  this.route('postSubmit', {
    path: '/submit',
    disableProgress: true,
    layoutTemplate: 'layoutAdmin',

    before: requireLogin

  });

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

});

