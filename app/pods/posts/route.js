import Ember from 'ember';
import getOrCreateUser from '../get-or-create-user/util';

export default Ember.Route.extend({
	model(params) {
		return this.store.find('post', params.postId);
	},
	actions: {
		submitComment(body, post, author) {
			let uid = author.get('uid');
			let user = getOrCreateUser(uid, Ember.get(this,'session.currentUser.username'), Ember.get(this, 'session.currentUser.profileImageURL'), this.store);

			user.then((userData) => {

			  let comment = this.store.createRecord('comment', {
			    body: body,
			    user: Ember.get(this,'session.currentUser'),
          timestamp: new Date().getTime()
			  });

			  post.get('comments').addObject(comment);
			  userData.get('comments').addObject(comment);

			  comment.save()
			  	.then(function() {
  					post.save();
  				})
  				.then(function() {
  					userData.save();
  				});
			});
		}
	}
});
