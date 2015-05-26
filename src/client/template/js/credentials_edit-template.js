//TODO user credential
/*Template.credentials.helpers({

	path: function () {
		console.log(Router.path('credential.edit', this),this._id);
	  return Router.path('credential.edit', this);
	},

	credentials : function () {
      return Credentials.find({});
    },
});	*/

Template.credentials_edit.rendered = function () {
	$(this.find('.modal-trigger')).leanModal();
};

Template.credentials_edit.events({
	'submit #editCredentialForm': function(e, t) {
	    e.preventDefault();

	    var editCredentialForm = $(e.currentTarget),
	    	id = editCredentialForm.find('#_id').val();
	        credential = editCredentialForm.find('#credential').val();
	        sites = editCredentialForm.find('#sites').val();
	        user = editCredentialForm.find('#user').val();
	        password = editCredentialForm.find('#password').val();
	        re_password = editCredentialForm.find('#re-password').val();
	        description = editCredentialForm.find('#description').val();
	        console.log(credential,sites,user);
	        //CHIAMO L'UPDATE
	        //TODO Validation
	        Meteor.call('updateCredential',credential,sites,user,password,description,id,function(err, data) {
  				console.log(data)
  				console.log(err);
			});
	},

	'button #delete' : function(e,t){
		e.preventDefault();
		console.log(this);
	}
});