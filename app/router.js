import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rooms', {path: 'rooms/:roomId'});
  this.route('posts', {path: 'rooms/:roomId/posts/:postId'});
});

export default Router;
