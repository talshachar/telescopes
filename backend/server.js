const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
    credentials: true
  };
  app.use(cors(corsOptions));
}

app.get('/api/messages', (req, res) => {
  res.send([
    {
      _id: 'm4rwWxJHr7',
      sender: {},
      receiver: {},
      subject: 'Hello world!',
      text: 'Lorem ipsum dolor sit amet',
      creation_date: 1610575415097
    },
    {
      _id: 'm87unlTN3q',
      sender: {},
      receiver: {},
      subject: 'Hola Mundo',
      text: 'The quick brown fox jumps over the lazy dog',
      creation_date: 1610575415097
    }
  ]);
});

app.post('/api/messages', (req, res) => {
  const message = req.body;
  res.send(message)
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});