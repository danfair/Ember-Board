import Ember from 'ember';
import getOrCreateUser from '../get-or-create-user/util';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('room', params.roomId);
	},
	actions: {
	  submitPost(title, body, room, author) {
	    let uid = author.get('uid');
	    let user = getOrCreateUser(uid, Ember.get(this,'session.currentUser.username'), Ember.get(this, 'session.currentUser.profileImageURL'), this.store);

	    user.then((userData) => {

	      let post = this.store.createRecord('post', {
	        title: title,
	        body: body,
	        user: Ember.get(this,'session.currentUser'),
          timestamp: new Date().getTime(),
          room: room
	      });

	      room.get('posts').addObject(post);
	      userData.get('posts').addObject(post);

	      post.save()
	      	.then(function() {
    				room.save();
    			})
    			.then(function() {
    				userData.save();
    			});
      });
	  }
	}
});
