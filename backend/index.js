// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.get('/api/distance', (req, res) => {
    const randomDistance = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
    res.json({ distance: randomDistance });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
