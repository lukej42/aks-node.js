const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: simple API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js! This is made by LG' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});