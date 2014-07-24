App = Ember.Application.create()

App.ApplicationAdapter = DS.FixtureAdapter.extend({})

App.Router.map(function(){
  this.resource('monsters', {path: 'monsters'}, function(){
    this.resource('monster', {path: ':monster_id'});
  });
});

App.Monster = DS.Model.extend({
  name: DS.attr('string'),
  level: DS.attr('number'),
  imageUrl: DS.attr('string')
})

App.Monster.FIXTURES = [
  {id: 1, name:'Sparkachu', level:3, imageUrl: 'https://s3.amazonaws.com/monsterbattle/electric.png'},
  {id: 2, name: 'Charember', level: 5, imageUrl: 'https://s3.amazonaws.com/monsterbattle/fire.png'},
  {id: 3, name: 'Rhauk', level: 28, imageUrl: 'https://s3.amazonaws.com/monsterbattle/earth.png'}
]

App.MonstersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('monster')
  }
});