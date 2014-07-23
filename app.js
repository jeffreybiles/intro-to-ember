App = Ember.Application.create()

// Think of this like a rails router
App.Router.map(function(){
  // this creates the monsters route
  this.resource('monsters');
});