
/*  Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://sircampydevelop@gmail.com:campydj90133@smtp.gmail.com:25';
});*/
  // This code only runs on the client
/*
Template.passwords.helpers({
    accounts: [
          { credential: "This is task 1" , user: "merda", password:"prova", descrizione :"fefeafae"},
          { sites: "This is task 1" ,user: "merda", password:"prova", descrizione :"fefeafae"},
          { sites: "This is task 1" ,user: "merda", password:"prova", descrizione :"fefeafae"}
        ]
  });*/

  /*Template.alert.helpers({
      alert: function() {
          return Session.get('alert');
      }
  });*/

/*
  Template.signUp.events({
      'submit #signUpForm': function(e, t) {
          e.preventDefault();

          var signUpForm = $(e.currentTarget),
              email = trimInput(signUpForm.find('#signUpEmail').val().toLowerCase()),
              password = signUpForm.find('#signUpPassword').val(),
              passwordConfirm = signUpForm.find('#signUpPasswordConfirm').val();

          if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm)) {
              Accounts.createUser({email: email, password: password}, function(err) {
                  if (err) {
                      if (err.message === 'Email already exists. [403]') {
                          Session.set('alert', 'We\'re sorry but this email is already used.');
                      } else {
                          Session.set('alert', 'We\'re sorry but something went wrong.');
                      }
                  } else {
                      Session.set('alert', 'Congrats! You\'re now a new Meteorite!');
                  }
              });
          }
          return false;
      },
  });

Template.signOut.events({
    'click #signOut': function(e, t) {
        Meteor.logout(function() {
            Session.set('alert', 'Bye Meteorite! Come back whenever you want!');
        });
        return false;
    }
});
    trimInput = function(value) {
        return value.replace(/^\s*|\s*$/g, '');
    };

    isNotEmpty = function(value) {
        if (value && value !== ''){
            return true;
        }
        Session.set('alert', 'Please fill in all required fields.');
        return false;
    };

    isEmail = function(value) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(value)) {
            return true;
        }
        Session.set('alert', 'Please enter a valid email address.');
        return false;
    };

    isValidPassword = function(password) {
        if (password.length < 6) {
            Session.set('alert', 'Your password should be 6 characters or longer.');
            return false;
        }
        return true;
    };

    areValidPasswords = function(password, confirm) {
        if (!isValidPassword(password)) {
            return false;
        }
        if (password !== confirm) {
            Session.set('alert', 'Your two passwords are not equivalent.');
            return false;
        }
        return true;
    };



  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted

      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });
cosole.log("debug");
      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });

  Template.signIn.events({
      'submit #signInForm': function(e, t) {
          e.preventDefault();

          var signInForm = $(e.currentTarget),
              email = trimInput(signInForm.find('.email').val().toLowerCase()),
              password = signInForm.find('.password').val();

          if (isNotEmpty(email) && isEmail(email) && isNotEmpty(password) && isValidPassword(password)) {
              Meteor.loginWithPassword(email, password, function(err) {
                  if (err) {
                      Session.set('alert', 'We\'re sorry but these credentials are not valid.');
                  } else {
                      Sesson.set('alert', 'Welcome back New Meteorite!');
                  }
              });
          }
          return false;
      },
  });
  Template.main.helpers({
      showForgotPassword: function() {
          return Session.get('showForgotPassword');
      },
       resetPassword: function(){
        return Session.get('resetPassword');
    },
  });
  Template.signIn.events({
      'submit #signInForm': function(e, t) {
          //...
      },
      'click #showForgotPassword': function(e, t) {
          Session.set('showForgotPassword', true);
          return false;
      },
  });
  Template.forgotPassword.events({
      'submit #forgotPasswordForm': function(e, t) {
          e.preventDefault();

          var forgotPasswordForm = $(e.currentTarget),
              email = trimInput(forgotPasswordForm.find('#forgotPasswordEmail').val().toLowerCase());

          if (isNotEmpty(email) && isEmail(email)) {
              Accounts.forgotPassword({email: email}, function(err) {
                  if (err) {
                      if (err.message === 'User not found [403]') {
                          Session.set('alert', 'This email does not exist.');
                      } else {
                          Session.set('alert', 'We\'re sorry but something went wrong.');
                      }
                  } else {
                      Session.set('alert', 'Email Sent. Please check your mailbox to reset your password.');
                  }
              });
          }
          return false;
      },

      'click #returnToSignIn': function(e, t) {
          Session.set('showForgotPassword', null);
          return false;
      },
  });

  Template.resetPassword.events({
      'submit #resetPasswordForm': function(e, t) {
          e.preventDefault();
          
          var resetPasswordForm = $(e.currentTarget),
              password = resetPasswordForm.find('#resetPasswordPassword').val(),
              passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();

          if (isNotEmpty(password) && areValidPasswords(password, passwordConfirm)) {
              Accounts.resetPassword(Session.get('resetPassword'), password, function(err) {
                  if (err) {
                      Session.set('alert', {type: 'error', message: 'We\'re sorry but something went wrong.'});
                  }
                  else {
                      Session.set('alert', 'Your password has been changed. Welcome back!');
                      Session.set('resetPassword', null);
                  }
              });
          }
          return false;
      }
  });*/

