const faker = require('faker');
const sportsData = require('./data/sportsData');

function generateSpread(sport) {
  const spreadRanges = {
    'NBA': { min: 1, max: 14 },
    'NFL': { min: 1, max: 12 },
    'NHL': { min: 1, max: 3 },
    'College Football': { min: 1, max: 26 },
    'Premier League': { min: 1, max: 3 },
    'default': { min: 1, max: 8 }
  };

  const range = spreadRanges[sport] || spreadRanges['default'];
  return faker.datatype.number(range);
}

function generateAmericanOdds(spread) {
  const baseOdds = 100;
  const oddsDifference = spread * 10;
  let homeOdds = baseOdds + oddsDifference;
  let awayOdds = baseOdds - oddsDifference;

  homeOdds = Math.max(homeOdds, 100);
  awayOdds = Math.max(awayOdds, 100);

  if (faker.datatype.boolean()) {
    return { home: `-${homeOdds}`, away: `+${awayOdds}` };
  } else {
    return { home: `+${awayOdds}`, away: `-${homeOdds}` };
  }
}

function generateBettingNumbers(sport) {
  const overUnderRanges = {
    'NBA': { min: 180, max: 230 },
    'NFL': { min: 35, max: 60 },
    'NHL': { min: 4, max: 8 },
    'College Football': { min: 40, max: 80 },
    'Premier League': { min: 2, max: 5 },
    'default': { min: 1, max: 10 }
  };

  const range = overUnderRanges[sport] || overUnderRanges['default'];
  const overUnder = faker.datatype.number(range);
  const spread = generateSpread(sport);
  const odds = generateAmericanOdds(spread);

  return {
    overUnder: overUnder.toString(),
    spread: spread.toString(),
    odds: odds
  };
}

function generateSportsMatch(sport, teams) {
  const betting = generateBettingNumbers(sport);
  return {
    id: faker.datatype.uuid(),
    sport: sport,
    home: teams[0],
    away: teams[1],
    date: faker.date.future(),
    odds: betting.odds,
    betting: {
      overUnder: betting.overUnder,
      spread: betting.spread
    }
  };
}

function generateMatches(number) {
  let matches = [];
  const sports = [
    { name: 'NBA', teams: sportsData.NBA },
    { name: 'NFL', teams: sportsData.NFL },
    // Add other sports as needed
  ];

  for (let i = 0; i < number; i++) {
    const sport = faker.random.arrayElement(sports);
    const teamMatchup = faker.random.arrayElements(sport.teams, 2);
    matches.push(generateSportsMatch(sport.name, teamMatchup));
  }

  return matches;
}

module.exports = { generateMatches };
