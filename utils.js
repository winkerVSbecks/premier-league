import clubs, { abbrs } from './clubs';

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
  return `${ minutes }:${ seconds }`;
}

export function isValidMatch({ home, away }) {
  return (
    abbrs.includes(home.toLowerCase()) && abbrs.includes(away.toLowerCase())
  );
}
