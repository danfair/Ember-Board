import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitComment(body, post, session) {
			this.sendAction('submitComment', body, post, session);
			this.set('body', '');
		},

	    signIn(provider) {
	      this.sendAction('signIn', provider);
	    },

	    signOut() {
	      this.sendAction('signOut');
	    }
	}
});
