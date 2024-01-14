const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { AerisWeather } = require('@aerisweather/javascript-sdk'); 
const { OpenAIApi } = require('openai-api');

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
    aeris.api().endpoint('observations').place('london, on').get()
      .then((result) => {
        const data = result.data.ob;
        res.json({ data });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });   

// OpenAI API
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAIApi(new Configuration({ apiKey: OPENAI_API_KEY }));

app.post('/api/openai', (req, res) => {
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
          {"role": "system", "content": "You are a helpful weather assistant that provides suggestions for the user based on what they want and the current weather conditions."},
        ]
      )
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
