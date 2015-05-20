Credentials = new Mongo.Collection('Credentials');

Credentials.allow({
  insert: function(userId, doc) {
    return doc.userId === userId;
  }
});

Credentials.latest = function() {
  return Credentials.find({}, {sort: {updateDate: -1}, limit: 1});
}

Meteor.methods({
  createCredential: function(credential,sites,user,password,description) {
    //check(Meteor.userId(), String);
    //FIXME
    /*check({
      paltform: String,
      sites: String,
      user: Match.OneOf(String, Float, null),
      passowrd: String,
      description : Match.OneOf(String, null)
    });*/
      
    //Credential.userId = Meteor.userId();
    Credential = {};
    Credential.credential = credential;
    Credential.sites = sites;
    Credential.user = user;
    Credential.password = password;
    Credential.description = description;
    Credential.createDate = new Date();
    Credential.updateDate = new Date();
    
    Meteor.call('encrypt',password,function(err,result){
      //DEBUG
      //console.log(result);
      Credential.password = result;
    });
    var id = Credentials.insert(Credential);
    return id;
  },

  updateCredential: function(credential,sites,user,password,description) {
    check(Meteor.userId(), String);
    //FIXME
   /* check(
      paltform: String,
      sites: String,
      user: Match.OneOf(String, Integer, null),
      passowrd: String,
      description : Match.OneOf(String, null)
    );*/
      
    Credential.userId = Meteor.userId();
    Credential.credential = credential;
    Credential.sites = sites;
    Credential.user = user;
    Credential.password = password;
    Credential.description = description;
    Credential.createDate = new Date();
   
    Meteor.call('encrypt',password,function(err,result){
      //DEBUG
      //console.log(result);
      Credential.password = result;
    });
    var id = Credentials.update(Credential);
    return id;
  }
});


// Initialize a seed Credential
Meteor.startup(function() {
  if (Meteor.isServer && Credentials.find().count() === 0) {
    Credentials.insert({
       credential: "Facebook", 
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


