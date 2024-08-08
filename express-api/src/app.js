const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const matrixRoutes = require('./routes/matrixRoutes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', matrixRoutes);

app.listen(PORT, () => {
  console.log(`Node.js API running on http://localhost:${PORT}`);
});
