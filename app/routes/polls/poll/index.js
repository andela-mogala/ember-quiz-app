import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleOption(vote, option) {
      vote.toggleOption(option);
    },

    castVote(vote) {
      this.get('store').saveVote(vote);
      this.transitionTo("polls.poll.results");
    }
  },

  model() {
    const poll = this.modelFor("polls.poll");
    return this.get('store').createVote(poll);
  },
  store: Ember.inject.service()
});
