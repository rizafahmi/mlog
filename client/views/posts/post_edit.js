Template.postEdit.events({
  'submit form': function(e){
    e.preventDefault();

    var currentPostId = this._id;
    var title = $(e.target).find('[name=title]').val();
    var title = title.replace(new RegExp(/'/g), "\\'");

    var postProperties = {
      title: title,
      content: $(e.target).find('[name=content]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if(error){
        console.log(error.reason);
      }else{
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },
  'click .delete': function(e){
    e.preventDefault();
    
    if(confirm("Delete this article?")){
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});
