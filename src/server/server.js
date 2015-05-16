 Meteor.startup(function () {
 
 var newUser = {
    email: "test@test.it", 
    password: "testtest", 
    profile:{
      first_name: "Test", 
      last_name: "Testtest", 
      birthday: '2015-02-28'
    }
  };
  Accounts.createUser(newUser, function(err){});

}); 