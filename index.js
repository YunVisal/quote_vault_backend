const express = require('express');
const cors = require('cors');
const {QUOTE_API_URL, QUOTE_API_HOST, QUOTE_API_KEY, PORT} = require('./constant');

const app = express();

app.use(cors({
    origin: 'https://quote-vault.visalyun.me'
}));

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