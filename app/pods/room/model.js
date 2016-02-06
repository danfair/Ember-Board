import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  posts: DS.hasMany('post')
});
