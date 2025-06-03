
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Mentor Proxy server running on port ${PORT}`);
});
