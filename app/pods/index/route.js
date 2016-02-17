import Ember from 'ember';
import cleanURI from '../clean/util';
import getOrCreateUser from '../get-or-create-user/util';

const PAGE_SIZE = 5;

export default Ember.Route.extend({
  startAt: null,
  endAt: null,

  model() {
    return this.store.query('room', {
      orderBy: "timestamp",
      startAt: this.get('startAt'),
      endAt: this.get('endAt'),
      limitToFirst: PAGE_SIZE
    });
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
          admin: Ember.get(this,'session.currentUser'),
          timestamp: new Date().getTime() * -1
        });

        userData.get('rooms').addObject(room);

        room.save().then(function() {
          userData.save();
        });

      });

      this.refresh();
    },

    prev() {
      let timestamp = this.get('currentModel').get('firstObject.timestamp');
      this.set('startAt', null);
      this.set('endAt', timestamp - 1);
      this.refresh();
    },

    next() {
      let timestamp = this.get('currentModel').get('lastObject.timestamp');
      this.set('startAt', timestamp + 1);
      this.set('endAt', null);
      this.refresh();
    }
  }
});
