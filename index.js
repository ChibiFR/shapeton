const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, () => {
  console.log('App available at http://localhost:3000');
});
