import Ember from 'ember';

export function excerpt(params) {
  return params[0].substring(0,25) + '...';
}

export default Ember.Helper.helper(excerpt);
