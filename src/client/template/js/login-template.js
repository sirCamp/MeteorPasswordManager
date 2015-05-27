//TODO user accounts
Template.login.helpers({
	trimInput : function(value) {
	    return value.replace(/^\s*|\s*$/g, '');
	},

	isNotEmpty : function(value) {
	    if (value && value !== ''){
	        return true;
	    }
	    Session.set('alert', 'Please fill in all required fields.');
	    return false;
	},

	isEmail : function(value) {
	    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    if (filter.test(value)) {
	        return true;
	    }
	    Session.set('alert', 'Please enter a valid email address.');
	    return false;
	},

	isValidPassword : function(password) {
	    if (password.length < 6) {
	        Session.set('alert', 'Your password should be 6 characters or longer.');
	        return false;
	    }
	    return true;
	},

	areValidPasswords : function(password, confirm) {
	    if (!isValidPassword(password)) {
	        return false;
	    }
	    if (password !== confirm) {
	        Session.set('alert', 'Your two passwords are not equivalent.');
	        return false;
	    }
	    return true;
	},

	loginMessage: function() {

		var alert = '<div class="card-panel teal"><span class="white-text">	Your credentials are incorrect. </span></div>';
    	return Session.get("loginMessage");
	},


	/*path: function () {
		console.log(Router.path('accounts.edit', this),this._id);
	  return Router.path('accounts.edit', this);
	},

	accounts : function () {
      return Accounts.find({});
    },*/
})


Template.login.events({
	'submit #signUpForm': function(e, t) {
        e.preventDefault();

        var signUpForm = $(e.currentTarget);
        var email = trimInput(signUpForm.find('#username').val().toLowerCase());
        var password = signUpForm.find('#password').val();

        if(isEmail(email) && isNotEmpty(email) && isNotEmpty(password)){
        	//DEVO LOGGARMI

        	Meteor.loginWithPassword(email, password,function(error){

	        	if(error == null){

	        		var user = Meteor.user();
	        		console.debug("LOGGED AS: "+user.emails[0].address);
	        		Router.go('/credentials');
	        	}
	        	else{
	        		
	        		console.debug("NOT LOGGED, LOGIN IS WRONG");
	        		Session.set('loginMessage', null);
	        		var alert = 'Your credentials are not valid. Have you forget the password?';
	        		Session.set('loginMessage', alert);
	        	}
        	});
        	
        		
        }
        else{
        	console.debug("NOT LOGGED, PARAMETERS TO LOGIN FORM IS INVALID");
        	var alert = 'Your credentials are incorrect!';
        	Session.set('loginMessage', alert);
        }
        	
    }
});