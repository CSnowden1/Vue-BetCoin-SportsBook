const faker = require('faker');

const sportsData = require('./data/sportsData'); // Adjust the path as per your directory structure


function generateBettingNumbers(sport) {
    let overUnder, spreadRange;
  
    switch (sport) {
      case 'NBA':
        overUnder = faker.finance.amount(180, 230, 1); 
        spreadRange = { min: 1, max: 14 }; 
        break;
      case 'NFL':
        overUnder = faker.finance.amount(35, 60, 1); 
        spreadRange = { min: 1, max: 12 }; 
        break;
      case 'NHL':
        overUnder = faker.finance.amount(4, 8, 1);
        spreadRange = { min: 1, max: 3 };
        break;
      case 'College Football':
        overUnder = faker.finance.amount(40, 80, 1); 
        spreadRange = { min: 1, max: 26 };
        break;
      case 'Premier League':
        overUnder = faker.finance.amount(2, 5, 1); 
        spreadRange = { min: 1, max: 3 }; 
        break;
      default:
        overUnder = faker.finance.amount(1, 10, 1);
        spreadRange = { min: 1, max: 8 };
    }
  
    return {
      overUnder: overUnder,
      spread: `${faker.random.arrayElement(['-', '+'])}${faker.datatype.number(spreadRange)}`
    };
  }
  

  function generateSportsMatch(sport, teams) {
    return {
      id: faker.datatype.uuid(),
      sport: sport,
      teams: teams,
      date: faker.date.future(),
      odds: {
        team1: faker.finance.amount(1, 2, 2),
        team2: faker.finance.amount(1, 2, 2)
      },
      betting: generateBettingNumbers(sport) // Pass the sport type
    };
  }
  


function generateMatches(number) {
  let matches = [];
  const sports = [
    { name: 'NBA', teams: sportsData.NBA },
    { name: 'NFL', teams: sportsData.NFL },
  ];


  for (let i = 0; i < number; i++) {
    const sport = faker.random.arrayElement(sports);
    const teamMatchup = faker.random.arrayElements(sport.teams, 2);
    matches.push(generateSportsMatch(sport.name, teamMatchup));
  }

  return matches;
}

module.exports = { generateMatches };
