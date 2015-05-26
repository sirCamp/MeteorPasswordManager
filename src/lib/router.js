
// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('credentials');
}

Router.configure({
  layoutTemplate: 'master',
  notFoundTemplate: 'notFound',
  controller: 'ApplicationController'
});


ApplicationController = RouteController.extend({

 onBeforeAction: function() {
    var currentUser = Meteor.user();
    //console.log(currentUser);
    window.c = Router;
    
    if (null !== currentUser) {
      if(Router.current().route.path() == "/" || Router.current().route.path() == "/login"){
        Router.go('/credentials');
        this.next();
      }
      else{
        Router.go(Router.current().route.path());
        this.next();
      }
    }
    else{
      Router.go('/login');
      this.next();
    }

  }

});

CredentialsController = ApplicationController.extend({
  

  yieldTemplates: {
    'nav': {to: 'navmenu'},
    'footer': {to: 'footer'},
    //'login':{to:'maincontent'}
  }

});

UsersController = ApplicationController.extend({

});

LoginController = ApplicationController.extend({

  yieldTemplates: {
    'login-nav': {to: 'navmenu'},
    'login-footer': {to: 'footer'},
  }

});

LogoutController = ApplicationController.extend({

  action: function () {
    Meteor.logout();   
  }

})

RegisterController = ApplicationController.extend({

  yieldTemplates: {
    'login-nav': {to: 'navmenu'},
    'login-footer': {to: 'footer'},
  }

})


DashboardController = ApplicationController.extend({
      action: function () {
      // render all templates and regions for this route
      Router.go('/credentials');
    }
});

/*
FeedController = RouteController.extend({
  onBeforeAction: function() {
    this.feedSubscription = feedSubscription;
  }
});

RecipesController = RouteController.extend({
  data: function() {
    return _.values(RecipesData);
  }
});

BookmarksController = RouteController.extend({
  onBeforeAction: function() {
    if (Meteor.user())
      Meteor.subscribe('bookmarks');
    else
      Overlay.open('authOverlay');
  },
  data: function() {
    if (Meteor.user())
      return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
  }
});

RecipeController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function() {
    return RecipesData[this.params.name];
  }
});

AdminController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('news');
  }
});
*//**//*
AccountController = RouteController.extend({

 onAfterAction: function () {
  console.log('merda');
 },
  

});*/

Router.map(function() {
  

  this.route('/',{
    name: 'dashboard',
    path: '/',
    controller: 'DashboardController',

  });
  
  this.route('login',
    {path:'/login'},
    {controller:'LoginController'},
    function(){
      this.render('login')
    }
  );

  this.route('logout',
    {path:'/logout'},
    {controller:'LogoutController'});

  this.route('register',
    {path:'/register'},
    {controller:'RegisterController'},
    function(){
    this.render('register')}
  );

  /*this.route('credentials',
    {path:'/credentials'},
    {name:'credentials'},
    {controller: 'CredentialsController'},function(){
      this.render('credentials')}
  );*/
  
  //SHOW
  /*this.route('credentials.show', function(){
    this.render('Account', {
      data: function() {
        return Credential.find({_id:this.params.id});
      }
      
    });
   
    this.layout('credentials');
    this.render('credential', {
        to: 'credential'
    });

  },
  {
    path: '/credentials/:_id'
  },
  {
    name: 'credential.show'
  },
 {onAfterAction: function(){
           console.log('cazzo');
         /* switch(this.route.getName()){
            case 'credentials.show':*/
           // console.log('cazzo');
          //  Meteor.defer(function () {
                // find #my-magic-div in the DOM
                // do stuff to it
              
           // $('.modal-trigger').leanModal();
           //   $('#modal2').openModal();});
           /*break;*/
         // };
        //}});

Router.route('/credentials', {

  name: 'credentials.index',
  path: '/credentials',
  controller: 'CredentialsController',
  template: 'credentials',
  onAfterAction: function () {
    console.debug("eseguito");
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
   
  }

});



Router.route('/credentials/create', {

  name: 'credentials.create',
  path: '/credentials/create',
  controller: 'CredentialsController',
  template: 'credentials_create',
  onAfterAction: function () {
    console.debug("eseguito");
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
   
  }

});


Router.route('/credentials/:_id/edit', {

  name: 'credentials.edit',
  path: '/credentials/:_id/edit',
  controller: 'CredentialsController',
  template: 'credentials_edit',
  
  waitOn: function() {
    return Meteor.subscribe('credentials');
  },
  
  data: function () {
    return Credentials.findOne({_id: this.params._id});
  },
  onAfterAction: function () {
    this.render();
  },

  /*action: function () {

    this.render();
   
  }*/

});

this.route('/credentials/:_id/delete', {

  name: 'credentials.delete',
  path: '/credentials/:_id/delete',
  controller: 'CredentialsController',
  template: 'credentials_edit',
  
  waitOn: function() {
    return Meteor.subscribe('credentials');
  },
  
  data: function () {
    return Credentials.findOne({_id: this.params._id});
  },
  onAfterAction: function () {
    this.render();
  },

  /*action: function () {

    this.render();
   
  }*/

});


Router.route('/credentials/:_id/edit1', {
  // The name of the route.
  // Used to reference the route in path helpers and to find a default template
  // for the route if none is provided in the "template" option. If no name is
  // provided, the router guesses a name based on the path '/post/:_id'
  name: 'credentials.edit1',

  // To support legacy versions of Iron.Router you can provide an explicit path
  // as an option, in case the first parameter is actually a route name.
  // However, it is recommended to provide the path as the first parameter of the
  // route function.
  path: '/credentials/:_id/edit1',

  // If we want to provide a specific RouteController instead of an anonymous
  // one we can do that here. See the Route Controller section for more info.
  controller: 'CredentialController',

  // If the template name is different from the route name you can specify it
  // explicitly here.
  template: 'credentials1',

  // A layout template to be used with this route.
  // If there is no layout provided, a default layout will
  // be used.
  //layoutTemplate: 'ApplicationLayout',

  // A declarative way of providing templates for each yield region
  // in the layout
 /* yieldRegions: {
    'MyAside': {to: 'aside'},
    'MyFooter': {to: 'footer'}
  },*/

  // Subscriptions or other things we want to "wait" on. More on waitOn in the
  // next section.
  waitOn: function () {
    //return Meteor.subscribe('post', this.params._id);
  },

  // A data function that can be used to automatically set the data context for
  // our layout. This function can also be used by hooks and plugins. For
  // example, the "dataNotFound" plugin calls this function to see if it
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Credential.findOne({_id: this.params._id});
  },

  // You can provide any of the hook options described below in the "Using
  // Hooks" section.
 // onRun: function () {},
  //onRerun: function () {},
 //onBeforeAction: function () {},
  onAfterAction: function () {
    Meteor.defer(function () {
                    // find #my-magic-div in the DOM
                    // do stuff to it
                  
                $('.modal-trigger').leanModal();
                  $('#modal2').openModal();});
  },
//  onStop: function () {},

  // The same thing as providing a function as the second parameter. You can
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function
  // is optional. By default a route will render its template, layout and
  // regions automatically.
  // Example:
  //  action: 'myActionFunction'
  action: function () {
    // render all templates and regions for this route
    this.render();
   
  }
});



















  //EDIT
  /*
  this.route('credentials.edit', function(){
    this.render('Account', {
      data: function() {
        return Credential.find({_id:this.params.id});
      }
    });
  },
  {
    path: '/credentials/:_id/edit'
  },
  {
    name: 'credential.edit'
  });*/

  //DELETE

  /*this.route('feed');
  this.route('recipes');
  this.route('bookmarks');
  this.route('about');
  this.route('recipe', {path: '/recipes/:name'});
  this.route('admin', { layoutTemplate: null });*/
});

Router.onBeforeAction('dataNotFound', {only: 'recipe'});