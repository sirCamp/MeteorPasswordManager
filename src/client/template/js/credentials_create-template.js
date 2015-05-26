

Template.credentials_create.events({
	'submit #newCredentialForm': function(e, t) {
	    e.preventDefault();

	    var newCredentialForm = $(e.currentTarget),
	        credential = newCredentialForm.find('#credential').val();
	        sites = newCredentialForm.find('#sites').val();
	        user = newCredentialForm.find('#user').val();
	        password = newCredentialForm.find('#password').val();
	        re_password = newCredentialForm.find('#re-password').val();
	        description = newCredentialForm.find('#description').val();
	        console.log(credential,sites,user);
	        //CHIAMO L'UPDATE
	        //TODO Validation
	        
	        Meteor.call('createCredential',credential,sites,user,password,description,function(err, data) {
  				console.log(data)
  				console.log(err);
			});
	},

	'button #delete' : function(e,t){
		e.preventDefault();
		console.log(this);
	}
});