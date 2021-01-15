const messagesService = require('./messages-service');

module.exports = {
  getMessages,
  writeMessage,
  removeMessage
}

async function getMessages(req, res) {
  try {
    const user = { _id: 'u1' }; // Mock data
    const messages = await messagesService.query(user._id);
    res.send(messages);
  } catch (err) {
    console.log('getMessages err:', err);
  }
};

async function writeMessage(req, res) {
  const message = req.body;
  await messagesService.write(message);
  res.end();
};

async function removeMessage(req, res) {
  await messagesService.remove(req.param.id);
  res.end();
};