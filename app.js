const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('POC-22 CI/CD Working Successfully ');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
