App = Ember.Application.create()

App.Router.map(function(){
  this.resource('monsters');
});

// MonstersRoute is an Ember Route
// Ember.Route has lots of defaults, but you can overwrite any of them
// Here we're overwriting model
App.MonstersRoute = Ember.Route.extend({
  // this model will be used in the monsters template
  model: function(){
    return ['Sparkachu', 'Charember', 'Blastasaur'];
  }
});