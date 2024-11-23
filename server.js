const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON bodies

// GET /health - Returns server status
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is healthy' });
});

// POST /echo - Returns the JSON body sent in the request
app.post('/echo', (req, res) => {
    res.status(200).json(req.body);
});

// GET /time - Returns current server time in UTC without using inbuilt method
app.get('/time', (req, res) => {
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Month starts from 0
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
    const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    res.status(200).json({ time: utcTime });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
