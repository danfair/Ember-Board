import Ember from 'ember';
import cleanURI from '../../clean/util';

export default Ember.Component.extend({
  actions: {
    submitRoom(name, description, user) {
      let slug = cleanURI(this.get('name'));

      this.sendAction('submitRoom', name, description, user, slug);
      this.set('name', '');
      this.set('description', '');
    },

    signIn(provider) {
      this.sendAction('signIn', provider);
    }
  }
});
