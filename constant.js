require('dotenv').config();

const QUOTE_API_URL = process.env.QUOTE_API_URL;
const QUOTE_API_HOST = process.env.QUOTE_API_HOST;
const QUOTE_API_KEY = process.env.QUOTE_API_KEY;
const PORT = process.env.PORT

module.exports = {
    QUOTE_API_URL,
    QUOTE_API_HOST,
    QUOTE_API_KEY,
    PORT
}