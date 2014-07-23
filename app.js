App = Ember.Application.create()

App.Router.map(function(){
  this.resource('monsters');
});

App.MonstersRoute = Ember.Route.extend({
  // model is now an array of object literals
  model: function(){
    return [{name:'Sparkachu', level:3}, {name: 'Charember', level: 5}, {name: 'Blastasaur', level: 28}];
  }
});