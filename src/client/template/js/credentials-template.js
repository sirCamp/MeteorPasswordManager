//TODO user credential
Template.credentials.helpers({

	path: function () {
		console.log(Router.path('credential.edit', this),this._id);
	  return Router.path('credential.edit', this);
	},

	credentials : function () {
		console.log('merda');
      return Credentials.find({});
    },
});	

Template.credentials.events({
	'submit #newCredentialForm': function(e, t) {
	    

	    var newCredentialForm = $(e.currentTarget),
	        credential = newCredentialForm.find('#credential').val();
	        sites = newCredentialForm.find('#sites').val();
	        user = newCredentialForm.find('#user').val();
	        password = newCredentialForm.find('#password').val();
	        re_password = newCredentialForm.find('#re-password').val();
	        description = newCredentialForm.find('#description').val();
	        console.log(credential,sites,user);
	        //TODO Validation
	        Meteor.call('createCredential',credential,sites,user,password,description);
	},

	'button #delete' : function(e,t){
		e.preventDefault();
		console.log(this);
	}
});