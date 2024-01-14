const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { AerisWeather } = require('@aerisweather/javascript-sdk'); 
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

// Aeris Weather API
const AERIS_CLIENT_ID = process.env.AERIS_CLIENT_ID;
const AERIS_CLIENT_SECRET = process.env.AERIS_CLIENT_SECRET;
const aeris = new AerisWeather(AERIS_CLIENT_ID, AERIS_CLIENT_SECRET);

app.get('/api/weather', (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    aeris.api().endpoint('observations').place(`${latitude},${longitude}`).get()
      .then((result) => {
        const data = result.data;
        res.json({ data });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });   

// OpenAI API
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const client = new OpenAI();

app.post('/api/openai', (req, res) => {
    client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You are a helpful weather assistant that provides suggestions for the user based on the weather conditions. Keep your responses limited to 50 words or less."},
            {"role": "user", "content": req.body.message}
        ],
    })
    .then((result) => {
        res.json({ result });
    })
    .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
