import { get } from './network';
import { PREMIER_LEAGUE, BASE, reqOpts } from '../constants';

/**
 * Get all teams in a league
 * @param  {Number} [league] league ID
 * @return {Promise}
 */
export function getTeams(league = PREMIER_LEAGUE) {
  return get(`${ BASE }/competitions/${ league }/teams`, reqOpts);
}

/**
 * Get home fixtures for a club
 * @param  {String} homeTeam home team abbr
 * @return {Promise}
 */
export function getHomeFixtures(club) {
  return get(`${ BASE }/teams/${ club }/fixtures?venue=home`, reqOpts)
    .then(res => res.fixtures);
}
