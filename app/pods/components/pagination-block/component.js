import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    prev() {
      this.sendAction('prev');
    },

    next() {
      this.sendAction('next');
    }

  }
});
