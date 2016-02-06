import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  date: DS.attr('date'),
  user: DS.belongsTo('user'),
  post: DS.belongsTo('post')
});
