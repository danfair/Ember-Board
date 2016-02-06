import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('room');
  },
  actions: {
    submitRoom(name, description, user, slug) {
      let room = this.store.createRecord('room', {
        name: name,
        description: description,
        user: user,
        slug: slug
      });
      room.save();
    }
  }
});
