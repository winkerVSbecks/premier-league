export const PREMIER_LEAGUE = 426;
export const BASE = 'http://api.football-data.org/v1';
export const reqOpts = {
  headers: {
    'X-Auth-Token': process.env['API_KEY'],
    'X-Response-Control': 'minified',
  },
};
