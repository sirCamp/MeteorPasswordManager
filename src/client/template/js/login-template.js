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

	'button #delete' : function(e,t){
		e.preventDefault();
		console.log(this);
	}
});