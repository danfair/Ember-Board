import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitRoom(name, description, session) {
      this.sendAction('submitRoom', name, description, session);
      this.set('name', '');
      this.set('description', '');
    },

    signIn(provider) {
      this.sendAction('signIn', provider);
    }
  }
});
