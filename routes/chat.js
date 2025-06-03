
const express = require('express');
const router = express.Router();
const apiHandler = require('../utils/apiHandler');

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await apiHandler(prompt);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

module.exports = router;
