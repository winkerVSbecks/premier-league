import { PropTypes } from 'react';

export default {
  ars: {
    name: 'Arsenal',
    stadium: 'Emirates Stadium',
    abbr: 'ARS',
    color: '#fe0002',
  },
  bou: {
    name: 'AFC Bournemouth',
    stadium: 'Vitality Stadium',
    abbr: 'BOU',
    color: '#e62333',
  },
  bur: {
    name: 'Burnley',
    stadium: 'Turf Moor',
    abbr: 'BUR',
    color: '#6a003a',
  },
  che: {
    name: 'Chelsea',
    stadium: 'Stamford Bridge',
    abbr: 'CHE',
    color: '#0a4595',
  },
  cry: {
    name: 'Crystal Palace',
    stadium: 'Selhurst Park',
    abbr: 'CRY',
    color: '#eb302e',
  },
  eve: {
    name: 'Everton',
    stadium: 'Goodison Park',
    abbr: 'EVE',
    color: '#00369c',
  },
  hul: {
    name: 'Hull City',
    stadium: 'KCOM Stadium',
    abbr: 'HUL',
    color: '#f6a22e',
  },
  lei: {
    name: 'Leicester City',
    stadium: 'King Power Stadium',
    abbr: 'LEI',
    color: '#273e8a',
  },
  liv: {
    name: 'Liverpool',
    stadium: 'Anfield',
    abbr: 'LIV',
    color: '#e31b23',
  },
  mci: {
    name: 'Manchester City',
    stadium: 'Etihad Stadium',
    abbr: 'MCI',
    color: '#6caee0',
  },
  mun: {
    name: 'Manchester United',
    stadium: 'Old Trafford',
    abbr: 'MUN',
    color: '#d81920',
  },
  mid: {
    name: 'Middlesbrough',
    stadium: 'Riverside Stadium',
    abbr: 'MID',
    color: '#db1d23',
  },
  sou: {
    name: 'Southampton',
    stadium: `St. Mary's Stadium`,
    abbr: 'SOU',
    color: '#d71920',
  },
  stk: {
    name: 'Stoke City',
    stadium: 'bet365 Stadium',
    abbr: 'STK',
    color: '#d71f30',
  },
  sun: {
    name: 'Sunderland',
    stadium: 'Stadium of Light',
    abbr: 'SUN',
    color: '#db001b',
  },
  swa: {
    name: 'Swansea City',
    stadium: 'Liberty Stadium',
    abbr: 'SWA',
    color: '#f5f5f5',
  },
  tot: {
    name: 'Tottenham Hotspur',
    stadium: 'White Hart Lane',
    abbr: 'TOT',
    color: '#f5f5f5',
  },
  wat: {
    name: 'Watford',
    stadium: 'Vicarage Road',
    abbr: 'WAT',
    color: '#fe0',
  },
  wba: {
    name: 'West Bromwich Albion',
    stadium: 'The Hawthorns',
    abbr: 'WBA',
    color: '#f5f5f5',
  },
  whu: {
    name: 'West Ham United',
    stadium: 'London Stadium',
    abbr: 'WHU',
    color: '#7d2c3b',
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
