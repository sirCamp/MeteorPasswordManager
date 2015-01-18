//TODO user accounts
Template.accounts.helpers({

	accounts : function () {
      return Accounts.find({});
    },
})

Template.accounts.events({
	'submit #newAccountForm': function(e, t) {
	    e.preventDefault();

	    var newAccountForm = $(e.currentTarget),
	        platform = Meteor.call('trimInput',newAccountForm.find('#platform').val());
	        sites = newAccountForm.find('#sites').val();
	        user = newAccountForm.find('#user').val();
	        console.log(platform);
	}
});