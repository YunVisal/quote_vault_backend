const express = require('express');
const {QUOTE_API_URL, QUOTE_API_HOST, QUOTE_API_KEY, PORT} = require('./constant');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://quote-vault.visalyun.me');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
    // Allow preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
      return res.sendStatus(204);
    }
  
    next();
  });

app.get('/quote', async function(req, res) {
    try {
        const apiRes = await fetch(QUOTE_API_URL, {
            method: "GET",
            headers: {
                "x-rapidapi-host": QUOTE_API_HOST,
                "x-rapidapi-key": QUOTE_API_KEY
            }
        });
        const data = await apiRes.json();
        return res.status(200).json(data);
    } catch(e) {
        return res.status(500).json({"message": "Internal server error"});
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });