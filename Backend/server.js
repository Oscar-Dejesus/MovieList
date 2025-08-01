const express = require('express');
const app = express();

console.log('Express app starting');

app.get('/api', (req, res) => {
  console.log('GET /api');
  res.json({ message: ['hello world', 'hello again'] });
});

app.listen(5050, () => {
  console.log('Listening on port 5050');
});
