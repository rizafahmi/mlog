Template.commentSubmit.events({
  'submit form': function(e){
    e.preventDefault();

    Comments.insert({
      postId: this._id,
      text: $(e.target).find('[name=text]').val(),
      dateSubmit: new Date(),
      name: $(e.target).find('[name=name]').val()
    });

    $(e.target).find('[name=text]').val('');
    $(e.target).find('[name=name]').val('');

    Router.go('postPage', {_id: this._id});
  }
});
