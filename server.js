const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { handleChatStream } = require('./routes/chat');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// ✅ 加入 health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 主要 chat route
app.post('/api/chat/stream', handleChatStream);

// 啟動伺服器
app.listen(port, () => {
  console.log(`Mentor Proxy server running on port ${port}`);
});
