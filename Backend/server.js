// backend/server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3001;

app.prepare().then(() => {
  const server = express();

  // Example Express API route
  server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express + Next.js backend!' });
  });

  // Let Next.js handle everything else
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Backend running at http://localhost:${port}`);
  });
});
