const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { handleChatStream } = require('./routes/chat');

const app = express();
const port = process.env.PORT || 8080;  // 注意 Railway 預設是 8080

app.use(cors());
app.use(bodyParser.json());

// ✅ Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ✅ Main chat endpoint
app.post('/api/chat/stream', handleChatStream);

// ✅ Start server
app.listen(port, () => {
  console.log(`Mentor Proxy server running on port ${port}`);
});
