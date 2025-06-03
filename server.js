const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { handleChatStream } = require('./routes/chat');

const app = express();

// Railway 指定 PORT 或 fallback
const port = process.env.PORT || 8080;

// ✅ 中間件
app.use(cors());
app.use(bodyParser.json());

// ✅ Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// ✅ Chat API endpoint
app.post('/api/chat/stream', handleChatStream);

// ✅ 啟動伺服器
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Mentor Proxy server running on port ${port}`);
});
