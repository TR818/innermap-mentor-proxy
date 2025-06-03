
const axios = require('axios');
require('dotenv').config();

async function apiHandler(prompt) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const response = await axios.post('https://openrouter.ai/api/v1/chat', {
    model: 'deepseek/deepseek-chat',
    messages: [{ role: 'user', content: prompt }]
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

module.exports = apiHandler;
