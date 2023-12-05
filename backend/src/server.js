require('dotenv').config(); 

const express = require('express');
const cors = require('cors'); 
const morgan = require('morgan'); 
const { generateMatches } = require('./mockDataGenerator'); 

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors()); 
app.use(morgan('dev')); 
app.use(express.json());

app.get('/api/matches', (req, res) => {
  try {
    const numberOfMatches = 10;
    const matches = generateMatches(numberOfMatches);
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: "Error generating matches", error: error.toString() });
  }
});

const mockData = generateMatches(10); // Adjust the number as needed

console.log(JSON.stringify(mockData, null, 2));

app.get('/', (req, res) => {
    res.send('Welcome to the Sports Betting API!');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
