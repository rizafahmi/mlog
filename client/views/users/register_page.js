var trimInput = function(val) {
  return val.replace(new RegExp(/^\s*|\s*$/g), "");
}

var isValidPassword = function(val){
  return val.length >= 6 ? true : false;
}
Template.registerPage.events({
  'submit form': function(e){
    e.preventDefault();
    var email = $(e.target).find('[name=email]').val();
    var password = $(e.target).find('[name=password]').val();
    var email = trimInput(email);

    if(isValidPassword(password)){

      Accounts.createUser({email: email, password: password}, function(err){
        if(err){

        }else{
          Router.go('loginPage');

        }
      });
    }else{
      console.log("Password is not valid");
    }

    return false;
  }
});

Template.registerPage.helpers({
  'adminNotCreated': function(){
    return Meteor.users.find().count() === 1 ? false : true;
  }
});
