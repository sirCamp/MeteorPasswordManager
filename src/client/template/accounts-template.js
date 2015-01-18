//TODO user accounts
Template.accounts.helpers({

	accounts : function () {
      return Accounts.find({});
    },
})