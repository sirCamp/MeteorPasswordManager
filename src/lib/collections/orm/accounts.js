Accounts = new Mongo.Collection('Accounts');

Accounts.allow({
  insert: function(userId, doc) {
    return doc.userId === userId;
  }
});

Accounts.latest = function() {
  return Accounts.find({}, {sort: {updateDate: -1}, limit: 1});
}

Meteor.methods({
  createAccount: function(platform,sites,user,password,description) {
    //check(Meteor.userId(), String);
    //FIXME
    /*check({
      paltform: String,
      sites: String,
      user: Match.OneOf(String, Float, null),
      passowrd: String,
      description : Match.OneOf(String, null)
    });*/
      
    //Account.userId = Meteor.userId();
    Account = {};
    Account.platform = platform;
    Account.sites = sites;
    Account.user = user;
    Account.password = password;
    Account.description = description;
    Account.createDate = new Date();
    Account.updateDate = new Date();
    
    Meteor.call('encrypt',password,function(err,result){
      //DEBUG
      //console.log(result);
      Account.password = result;
    });
    var id = Accounts.insert(Account);
    return id;
  },

  updateAccount: function(platform,sites,user,password,description) {
    check(Meteor.userId(), String);
    //FIXME
   /* check(
      paltform: String,
      sites: String,
      user: Match.OneOf(String, Integer, null),
      passowrd: String,
      description : Match.OneOf(String, null)
    );*/
      
    Account.userId = Meteor.userId();
    Account.platform = platform;
    Account.sites = sites;
    Account.user = user;
    Account.password = password;
    Account.description = description;
    Account.createDate = new Date();
   
    var id = Accounts.insert(Account);
       
    return id;
  }
});


// Initialize a seed Account
Meteor.startup(function() {
  if (Meteor.isServer && Accounts.find().count() === 0) {
    Accounts.insert({
       platform: "Facebook", 
       sites: "www.facebook.com",
       user:"prova",
       password:"test",
       description:"fdsafdsadsfadfsfadasdafasdfasdfas", 
       createdAt: new Date(),
       updateAt: "",
       deletedAt:""
    });
  }
});


