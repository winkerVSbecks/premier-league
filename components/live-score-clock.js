import React, { PropTypes } from 'react';
import { compose, mapProps, branch, renderComponent, defaultProps } from 'recompose';
import { getClubs, isValidMatch } from '../utils';
import clrs from '../clrs';
import css from 'next/css';
import ScoreClock from '../components/score-clock';

const bar = css({
  fontSize: '1.5rem',
  color: clrs.white,
});

const Error = () => (
  <pre className={ bar }>Please provide valid team abbreviations</pre>
);

const LiveScoreClock = compose(
  branch(
    isValidMatch,
    mapProps(getClubs),
    renderComponent(Error),
  ),
  defaultProps({
    score: [0, 0],
    time: 80.25,
  }),
)(ScoreClock);

LiveScoreClock.propTypes = {
  home: PropTypes.string.isRequired,
  away: PropTypes.string.isRequired,
};

export default LiveScoreClock;
