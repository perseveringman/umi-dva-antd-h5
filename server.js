const path = require('path');
const express = require('express');
const app = express();
// const compression = require('compression');

// app.use(compression())
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(8008);
