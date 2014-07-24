App = Ember.Application.create()

// Choose the adapter you will use
// This adapter uses fixtures
App.ApplicationAdapter = DS.FixtureAdapter.extend({})

App.Router.map(function(){
  this.resource('monsters');
});

// Define your data class, extended from DS.Model
App.Monster = DS.Model.extend({
  // you must define each attribute you want to receive from fixtures or the server
  // The only exception is id
  // optional type coercion by defining it as a string, number, boolean, or date
  name: DS.attr('string'),
  level: DS.attr('number'),
  imageUrl: DS.attr('string')
})

// fixtures array
// this is what used to be in the MonstersRoute model, but with an id added
App.Monster.FIXTURES = [
  {id: 1, name:'Sparkachu', level:3, imageUrl: 'https://s3.amazonaws.com/monsterbattle/electric.png'},
  {id: 2, name: 'Charember', level: 5, imageUrl: 'https://s3.amazonaws.com/monsterbattle/fire.png'},
  {id: 3, name: 'Rhauk', level: 28, imageUrl: 'https://s3.amazonaws.com/monsterbattle/earth.png'}
]

App.MonstersRoute = Ember.Route.extend({
  model: function(){
    // the store is what keeps track of all the data
    // the find command with one argument with return all data of that type
    return this.store.find('monster')
  }
});