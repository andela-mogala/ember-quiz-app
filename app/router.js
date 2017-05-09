import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('polls', function() {
    this.route('poll', { path: ':poll_id' }, function() {
      this.route('results');
    });
  });
});

export default Router;
