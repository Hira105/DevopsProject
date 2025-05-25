const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const Form = mongoose.model('Form', {
  name: String,
  email: String
});

app.post('/submit', async (req, res) => {
  const data = new Form({ name: req.body.name, email: req.body.email });
  await data.save();
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
