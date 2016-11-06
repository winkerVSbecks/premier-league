import clubs, { abbrs } from '../clubs';
import moment from 'moment';

export function getClub(abbr) {
  const club = clubs[abbr.toLowerCase()];
  return club ? club : undefined;
}

export function getClubs({ home, away }) {
  return { home: getClub(home), away: getClub(away) };
}

export function parseScore(score) {
  return score.split(',');
}

export function formattedTime(time) {
  const minutes = Math.floor(time)
  const seconds = Math.floor((time % 1) * 60);
  const paddedSeconds = seconds < 10 ? '0' + seconds : seconds;
  return `${ minutes }:${ paddedSeconds }`;
}

export function isValidMatch({ home, away }) {
  return (
    abbrs.includes(home.toLowerCase()) && abbrs.includes(away.toLowerCase())
  );
}

export function getClubId(abbr) {
  return clubs[abbr.toLowerCase()].id;
}

export function findByAwayTeam(awayTeamId) {
  return fixtures => {
    return fixtures.find(fixture => fixture.awayTeamId === awayTeamId);
  };
}

function getLiveTime(date) {
  const now = moment(new Date());
  const start = moment(date);
  const diff = now.diff(start, 'minutes', true);
  return diff > 45 ? diff - Math.min(diff - 45, 15) : diff;
}

export function getTime(status, date) {
  return {
    POSTPONED: 0,
    SCHEDULED: 0,
    FINISHED: 90,
    FT: 90,
    IN_PLAY: getLiveTime(date),
  }[status] || 0;
}
