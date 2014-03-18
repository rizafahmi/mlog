Template.postSubmit.events({
  'submit form': function(e){
    e.preventDefault();

    var title = $(e.target).find('[name=title]').val();
    title = title.replace(new RegExp(/'/g), "\\'");

    var post = {
      title: title,
      content: $(e.target).find('[name=content]').val(),
      datePublish: new Date(),
      commentsCount: 0
    }

    post._id = Posts.insert(post);

    Router.go('postPage', post);
  }
});
