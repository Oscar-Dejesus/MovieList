const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all for undefined routes
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});

