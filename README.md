# About the Project
Travel Buddy came from the need to address various safety-related challenges in our daily lives. Travel Buddy is a safety-centric application designed to provide users with a sense of security in multiple situations. It offers features to enhance safety, such as identifying types of roads, weather conditions, driving limits, and Jane, the AI Weather Assistant that helps you make travel decisions. 

### Built With
- React.js (frontend)
- Express.js (backend)
- LeafletJS library for dynamic maps and routing
- Openpass API for real-time road information
- AerisWeather API up-to-date, hyperfocused weather conditions
- OpenAI to support the AI Chatbot

# Getting Started
## Prerequisites
- Node.js version `16.3.0` or higher

## Installation
1. Clone the repo 
2. Install the dependencies with 
`npm install`
3. Add the `.env` file in the server folder
```
# Aeris Weather API Keys
AERIS_CLIENT_ID=[CLIENT ID]
AERIS_CLIENT_SECRET=[SECRET KEY]

# Open AI
OPENAI_API_KEY=[API KEY]
```
4. In a new terminal, `cd` into the server folder and start the server by running 
`node index.js`
5. In the first terminal, run 
`npm start`