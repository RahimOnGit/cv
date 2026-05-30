const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname)); // serves dyn-cv.html, cv-data.json etc.

app.post('/save', (req, res) => {
  const dataPath = path.join(__dirname, 'cv-data.json');
  fs.writeFileSync(dataPath, JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Dynamic CV server running at http://localhost:${PORT}`));
