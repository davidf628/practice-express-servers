//const express = require('express');
import express from 'express';
const app = express();
const PORT = 3000;

// Allow static files (so we can serve our HTML frontend)
app.use(express.static('public'));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}` + 
              `\n\nPress CTRL-C to quit.`);
});