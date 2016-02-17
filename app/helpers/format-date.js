import Ember from 'ember';

export function formatDate(timestamp, isInverted) {
  if (isInverted) {
    timestamp[0] = -1 * timestamp[0];
  }
  let date = new Date(timestamp[0]);
  let days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thur', 'Fri', 'Sat'];
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  return days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' / ' + date.toLocaleTimeString();
}

export default Ember.Helper.helper(formatDate);
