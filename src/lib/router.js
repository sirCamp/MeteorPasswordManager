
// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('accounts');
}

/*Router.configure({
  layoutTemplate: 'ApplicationLayout',
  notFoundTemplate: 'notFound'
});*/
Router.configure({
  controller: 'ApplicationController'
});
//TODO
if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  //dataReadyHold = LaunchScreen.hold();
}

ApplicationController = RouteController.extend({
  layoutTemplate: 'ApplicationLayout'
});
AccountsController = ApplicationController.extend({
  
  onBeforeAction: function() {
      var currentUser = Meteor.user();
      if (null !== currentUser) {
        this.next();
      }
      else{
        Router.go('/login');
      }
      
    },

  onAfterAction: function(){
     console.log('cazzo');
   /* switch(this.route.getName()){
      case 'accounts.show':*/
      console.log('cazzo');
      Meteor.defer(function () {
          // find #my-magic-div in the DOM
          // do stuff to it
        
      $('.modal-trigger').leanModal();
       /* $('#modal1').openModal();*/});
     /*break;*/
   // };
  }
});

UsersController = ApplicationController.extend({

});
/*
HomeController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('latestActivity', function() {
      dataReadyHold.release();
    });
  }
});

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
  //this.route('home', {path: '/'});
  /*TODO finish accounts route*/
  
  this.route('login',{path:'/login'},{controller:'LoginController'});
  this.route('accounts',{path:'/accounts'},{name:'accounts'},{controller: 'AccountsController'});
  
  //SHOW
  /*this.route('accounts.show', function(){
    this.render('Account', {
      data: function() {
        return Accounts.find({_id:this.params.id});
      }
      
    });
   
    this.layout('accounts');
    this.render('account', {
        to: 'account'
    });

  },
  {
    path: '/accounts/:_id'
  },
  {
    name: 'account.show'
  },
 {onAfterAction: function(){
           console.log('cazzo');
         /* switch(this.route.getName()){
            case 'accounts.show':*/
           // console.log('cazzo');
          //  Meteor.defer(function () {
                // find #my-magic-div in the DOM
                // do stuff to it
              
           // $('.modal-trigger').leanModal();
           //   $('#modal2').openModal();});
           /*break;*/
         // };
        //}});










Router.route('/accounts/:_id/edit', {
  // The name of the route.
  // Used to reference the route in path helpers and to find a default template
  // for the route if none is provided in the "template" option. If no name is
  // provided, the router guesses a name based on the path '/post/:_id'
  name: 'accounts.edit',

  // To support legacy versions of Iron.Router you can provide an explicit path
  // as an option, in case the first parameter is actually a route name.
  // However, it is recommended to provide the path as the first parameter of the
  // route function.
  path: '/accounts/:_id/edit',

  // If we want to provide a specific RouteController instead of an anonymous
  // one we can do that here. See the Route Controller section for more info.
  controller: 'AccountsController',

  // If the template name is different from the route name you can specify it
  // explicitly here.
  template: 'accounts',

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
    return Accounts.findOne({_id: this.params._id});
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
  this.route('accounts.edit', function(){
    this.render('Account', {
      data: function() {
        return Accounts.find({_id:this.params.id});
      }
    });
  },
  {
    path: '/accounts/:_id/edit'
  },
  {
    name: 'account.edit'
  });*/

  //DELETE
  this.route('accounts.delete',function(){
    this.render('Account', {
      data: function() {
        return Accounts.find({_id:this.params.id});
      }
    });
  },
  {
    path: '/accounts/:_id/delete'
  },
  {
    name: 'account.delete'
  });
  /*this.route('feed');
  this.route('recipes');
  this.route('bookmarks');
  this.route('about');
  this.route('recipe', {path: '/recipes/:name'});
  this.route('admin', { layoutTemplate: null });*/
});

Router.onBeforeAction('dataNotFound', {only: 'recipe'});