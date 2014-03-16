Template.loginPage.events({
  'submit form': function(e, t){
    e.preventDefault();

    var email = t.find('#email').value;
    var password = t.find('#password').value;

    Meteor.loginWithPassword(email, password, function(err){
      if(err){

      }else{
        Router.go('postSubmit');

      }
    });

    return false;
  }
});

Template.loginPage.helpers({
  'adminNotCreated': function(){
    return Meteor.users.find().count() === 1 ? false : true;
  }
});
