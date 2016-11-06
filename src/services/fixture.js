import R from 'ramda';
import { getHomeFixtures } from '../api/football-data';
import { getClubId, findByAwayTeam, getClub, getTime } from '../utils';

const normalizeFixture = R.evolve({
  home: getClub,
  away: getClub,
  time: R.defaultTo(0),
  score: {
    home: R.defaultTo(0),
    away: R.defaultTo(0),
  },
});

/**
 * Get a fixture for the given teams
 * @param  {String} home home team abbr
 * @param  {String} away away team abbr
 * @return {Promise}
 */
export function getFixture(home, away) {
  return R.composeP(
    normalizeFixture,
    buildFixture(home, away),
    R.compose(findByAwayTeam, getClubId)(away),
    R.compose(getHomeFixtures, getClubId),
  )(home);
}

function buildFixture(home, away) {
  return ({ result, status, date }) => ({
    home: home,
    away: away,
    time: getTime(status, date),
    score: {
      home: result.goalsHomeTeam,
      away: result.goalsAwayTeam,
    },
  });
}
