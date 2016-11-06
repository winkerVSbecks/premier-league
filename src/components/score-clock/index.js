import React, { PropTypes } from 'react';
import css from 'next/css';
import { clubPropType } from '../../clubs';
import HomeTeam from './home-team';
import AwayTeam from './away-team';
import Score from './score';
import Clock from './clock';
import PremierLeagueLogo from '../premier-league-logo';

const bar = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const logo = css({
  height: 75,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  marginBottom: -8
});

const ScoreClock = ({ home, away, score, time = 90 }) => (
  <div>
    <PremierLeagueLogo css={ logo } />
    <div className={ bar }>
      <HomeTeam name={ home.abbr } color={ home.color } />
      <Score { ...score } />
      <AwayTeam name={ away.abbr } color={ away.color } />
    </div>
    <Clock time={ time } />
  </div>
);

ScoreClock.propTypes = {
  home: clubPropType.isRequired,
  away: clubPropType.isRequired,
  score: PropTypes.object,
  time: PropTypes.number,
};

export default ScoreClock;
