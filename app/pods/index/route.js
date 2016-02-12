import Ember from 'ember';
import cleanURI from '../clean/util';
import getOrCreateUser from '../get-or-create-user/util';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('room');
  },
  actions: {
    submitRoom(name, description, author) {
      let slug = cleanURI(name);
      let uid = author.get('uid');
      let user = getOrCreateUser(uid, Ember.get(this,'session.currentUser.username'), Ember.get(this, 'session.currentUser.profileImageURL'), this.store);

      user.then((userData) => {

        let room = this.store.createRecord('room', {
          name: name,
          description: description,
          slug: slug,
          admin: Ember.get(this,'session.currentUser')
        });

        userData.get('rooms').addObject(room);

        room.save().then(function() {
          userData.save();
        });

      });
    }
  }
});
