import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  timestamp: DS.attr('number'),
  description: DS.attr('string'),
  admin: DS.belongsTo('user', { async: true }),
  posts: DS.hasMany('post')
});
