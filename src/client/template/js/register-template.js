Template.register.rendered = function () {
	$(this.find('.datepicker')).pickadate();
};

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

Template.register.helpers({
	
	message: function () {
		return Session.get("message");
	},

	messageType: function () {
		return Session.get("messageType");
	},

	path: function () {
		console.log(Router.path('credential.edit', this),this._id);
	  return Router.path('credential.edit', this);
	},

	credentials : function () {
		console.log('merda');
      return Credentials.find({});
    },
});	

Template.register.events({
	'submit #registerForm': function(e, t) {
	    
		e.preventDefault();
	    var registerForm = $(e.currentTarget),
	        
	        first_name = registerForm.find('#first_name').val();
	        last_name = registerForm.find('#last_name').val();
	        email = registerForm.find('#email').val();
	        password = registerForm.find('#password').val();
	        re_password = registerForm.find('#re-password').val();
	        birthday_date = registerForm.find('#date').val();
	        
	        var newUser = {
	        	email: email, 
	        	password: password, 
	        	profile:{
	        		first_name: first_name, 
	        		last_name: last_name, 
	        		birthday: birthday_date
	        	}
	        };

	        if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, re_password)) {
	            Accounts.createUser(newUser, function(err) {
	                if (err) {
	                    if (err.message === 'Email already exists. [403]') {
	                        Session.set('messageType','error');
	                        Session.set('message', 'We\'re sorry but this email is already used.');
	                    } else {
	                    	Session.set('messageType','error');
	                        Session.set('message', 'We\'re sorry but something went wrong.');
	                    }
	                } else {
	                	Session.set('messageType','success');
	                    Session.set('message', 'Congrats! You\'re now a new Meteorite!');
	                }
	            });
	        }
	        //console.log(credential,sites,user);
	        //TODO Validation
	        //Meteor.call('createCredential',credential,sites,user,password,description);
	},

	'button #delete' : function(e,t){
		e.preventDefault();
		console.log(this);
	}
});