App = Ember.Application.create()

App.Router.map(function(){
  this.resource('monsters');
});

App.MonstersRoute = Ember.Route.extend({
  // model is now an array of object literals
  model: function(){
    return [
      {name:'Sparkachu', level:3, imageUrl: 'https://s3.amazonaws.com/monsterbattle/electric.png'},
      {name: 'Charember', level: 5, imageUrl: 'https://s3.amazonaws.com/monsterbattle/fire.png'},
      {name: 'Rhauk', level: 28, imageUrl: 'https://s3.amazonaws.com/monsterbattle/earth.png'}
    ];
  }
});