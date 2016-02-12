import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitPost(title, body, room, session) {
			this.sendAction('submitPost', title, body, room, session);
			this.set('title', '');
			this.set('body', '');
		}
	}
});
