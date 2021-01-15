const { measureMemory } = require("vm");

module.exports = {
  query,
  write,
  remove
}

const messages = [
  {
    _id: 'm4rwWxJHr7',
    sender: {
      _id: 'u2',
      full_name: 'Amir asdsdas',
      email: 'test@gmail.com',
      photo_url: ''
    },
    receiver: {
      _id: 'u0',
      full_name: 'Telescopes Staff',
      email: 'no-reply@telescopes.com',
      photo_url: ''
    },
    subject: 'test1',
    text: 'testing',
    creation_date: 1610575415097
  },
  {
    _id: 'm4rwWxJHr7',
    sender: {
      _id: 'u1',
      full_name: 'Tal Shachar',
      email: 'shactal@gmail.com',
      photo_url: ''
    },
    receiver: {
      _id: 'u0',
      full_name: 'Telescopes Staff',
      email: 'no-reply@telescopes.com',
      photo_url: ''
    },
    subject: 'Hello world!',
    text: 'Lorem ipsum dolor sit amet',
    creation_date: 1610575415097
  },
  {
    _id: 'm87unlTN3q',
    sender: {
      _id: 'u0',
      full_name: 'Telescopes Staff',
      email: 'no-reply@telescopes.com',
      photo_url: ''
    },
    receiver: {
      _id: 'u1',
      full_name: 'Tal Shachar',
      email: 'shactal@gmail.com',
      photo_url: ''
    },
    subject: 'Greetings from Telescopes!',
    text: 'The quick brown fox jumps over the lazy dog.',
    creation_date: 1610575415097
  }
];

function query(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messages.filter(({ sender, receiver }) => sender._id === userId || receiver._id === userId));
    }, 500);
  });
}

function write(message) {
  messages.unshift(message);
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

function remove(messageId) {
  console.log('remove message', messageId)
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}