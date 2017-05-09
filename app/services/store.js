import Ember from 'ember';
import Poll from 'quiz/models/poll';
import Option from 'quiz/models/option';
import Vote from 'quiz/models/vote';

const polls = [];

let poll = Poll.create({
  id: '1',
  options: [],
  prompt: "Which of the following is NOT part of the Woodland Wanderer Way",
  votes: []
});

poll.get('options').pushObjects([
  Option.create({ id: '1', label: 'Honesty', poll: poll }),
  Option.create({ id: '2', label: 'Integrity', poll: poll }),
  Option.create({ id: '3', label: 'Impatience', poll: poll })
]);

polls.pushObject(poll);

poll = Poll.create({
  id: '2',
  options: [],
  prompt: 'Which poisonous plant are you?',
  votes: []
});

poll.get('options').pushObjects([
  Option.create({ id: '4', label: 'Nightshade', poll: poll}),
  Option.create({ id: '5', label: 'Hemlock', poll: poll}),
  Option.create({ id: '6', label: 'Rhubard', poll: poll})
]);


polls.pushObject(poll);

export default Ember.Service.extend({
  createPoll() {
    const poll = Poll.create({
      votes: [],
      options: []
    });
    poll.get('options').pushObjects([
      Option.create({poll}),
      Option.create({poll}),
      Option.create({poll})
    ]);
    return poll;
  },

  createVote(poll) {
    return Vote.create({poll});
  },

  savePoll(poll) {
  poll.set('id', polls.length + 1);
    polls.pushObject(poll);
  },

  saveVote(vote) {
    const poll = vote.get('poll');
    poll.get('votes').pushObject(vote);
  },

  findAllPolls() {
    return polls;
  },

  findPoll(id) {
    return this.findAllPolls().findBy('id', id);
  }
});
