const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

const data = 'Hi,data from post';
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

//post method
app.post('/post', (req, res) => {
  res.send(`${data} data from input <h2>${req.body.name}</h2>`);
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
