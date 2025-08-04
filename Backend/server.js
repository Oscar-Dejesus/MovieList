const express = require('express');
const app = express();
const cors =require('cors')
const { getTitles } = require('./index'); 
console.log('Express app starting');

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/api', async (req, res) => {
  console.log('GET /api');
  const title = await getTitles(); 
  res.json({ message: title }); 

});

app.listen(5050, () => {
  console.log('Listening on port 5050');
});