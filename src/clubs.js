import { PropTypes } from 'react';

export default {
  ars: {
    name: 'Arsenal',
    stadium: 'Emirates Stadium',
    abbr: 'ARS',
    color: '#fe0002',
    id: 57,
  },
  bou: {
    name: 'AFC Bournemouth',
    stadium: 'Vitality Stadium',
    abbr: 'BOU',
    color: '#e62333',
    id: 1044,
  },
  bur: {
    name: 'Burnley',
    stadium: 'Turf Moor',
    abbr: 'BUR',
    color: '#6a003a',
    id: 328,
  },
  che: {
    name: 'Chelsea',
    stadium: 'Stamford Bridge',
    abbr: 'CHE',
    color: '#0a4595',
    id: 61,
  },
  cry: {
    name: 'Crystal Palace',
    stadium: 'Selhurst Park',
    abbr: 'CRY',
    color: '#eb302e',
    id: 354,
  },
  eve: {
    name: 'Everton',
    stadium: 'Goodison Park',
    abbr: 'EVE',
    color: '#00369c',
    id: 62,
  },
  hul: {
    name: 'Hull City',
    stadium: 'KCOM Stadium',
    abbr: 'HUL',
    color: '#f6a22e',
    id: 322,
  },
  lei: {
    name: 'Leicester City',
    stadium: 'King Power Stadium',
    abbr: 'LEI',
    color: '#273e8a',
    id: 338,
  },
  liv: {
    name: 'Liverpool',
    stadium: 'Anfield',
    abbr: 'LIV',
    color: '#e31b23',
    id: 64,
  },
  mci: {
    name: 'Manchester City',
    stadium: 'Etihad Stadium',
    abbr: 'MCI',
    color: '#6caee0',
    id: 65,
  },
  mun: {
    name: 'Manchester United',
    stadium: 'Old Trafford',
    abbr: 'MUN',
    color: '#d81920',
    id: 66,
  },
  mid: {
    name: 'Middlesbrough',
    stadium: 'Riverside Stadium',
    abbr: 'MID',
    color: '#db1d23',
    id: 343,
  },
  sou: {
    name: 'Southampton',
    stadium: `St. Mary's Stadium`,
    abbr: 'SOU',
    color: '#d71920',
    id: 340,
  },
  stk: {
    name: 'Stoke City',
    stadium: 'bet365 Stadium',
    abbr: 'STK',
    color: '#d71f30',
    id: 70,
  },
  sun: {
    name: 'Sunderland',
    stadium: 'Stadium of Light',
    abbr: 'SUN',
    color: '#db001b',
    id: 71,
  },
  swa: {
    name: 'Swansea City',
    stadium: 'Liberty Stadium',
    abbr: 'SWA',
    color: '#f5f5f5',
    id: 72,
  },
  tot: {
    name: 'Tottenham Hotspur',
    stadium: 'White Hart Lane',
    abbr: 'TOT',
    color: '#f5f5f5',
    id: 73,
  },
  wat: {
    name: 'Watford',
    stadium: 'Vicarage Road',
    abbr: 'WAT',
    color: '#fe0',
    id: 346,
  },
  wba: {
    name: 'West Bromwich Albion',
    stadium: 'The Hawthorns',
    abbr: 'WBA',
    color: '#f5f5f5',
    id: 74,
  },
  whu: {
    name: 'West Ham United',
    stadium: 'London Stadium',
    abbr: 'WHU',
    color: '#7d2c3b',
    id: 563,
  },
};

const abbrs = ['ars', 'bou', 'bur', 'che', 'cry', 'eve', 'hul', 'lei', 'liv',
  'mci', 'mun', 'mid', 'sou', 'stk', 'sun', 'swa', 'tot', 'wat', 'wba', 'whu'];

const clubPropType = PropTypes.shape({
  name: PropTypes.string,
  stadium: PropTypes.string,
  abbr: PropTypes.string,
  color: PropTypes.string,
});

export { abbrs, clubPropType };
