//TODO user accounts
Template.accounts.helpers({

	path: function () {
		console.log(Router.path('accounts.edit', this),this._id);
	  return Router.path('accounts.edit', this);
	},

	accounts : function () {
      return Accounts.find({});
    },
})

Template.accounts.events({
	'submit #newAccountForm': function(e, t) {
	    

	    var newAccountForm = $(e.currentTarget),
	        platform = newAccountForm.find('#platform').val();
	        sites = newAccountForm.find('#sites').val();
	        user = newAccountForm.find('#user').val();
	        password = newAccountForm.find('#password').val();
	        re_password = newAccountForm.find('#re-password').val();
	        description = newAccountForm.find('#description').val();
	        console.log(platform,sites,user);
	        //TODO Validation
	        Meteor.call('createAccount',platform,sites,user,password,description);
	},

	'button #delete' : function(e,t){
		e.preventDefault();
		console.log(this);
	}
});