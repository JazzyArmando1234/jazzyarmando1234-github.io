const express = require('express');
const app = express();
const port = 5501;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/res', (req, res) => {
    res.sendFile(__dirname + '/src/pannel.html');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});