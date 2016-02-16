import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user'),
  timestamp: DS.attr('number'),
  room: DS.belongsTo('room')
});
