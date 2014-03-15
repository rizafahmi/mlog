Template.postSubmit.events({
  'submit form': function(e){
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val(),
      datePublish: new Date()
    }

    post._id = Posts.insert(post);

    Router.go('postPage', post);
  }
});
