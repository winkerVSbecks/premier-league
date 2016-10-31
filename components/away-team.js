import React, { PropTypes } from 'react';
import css from 'next/css';
import Band from './color-band';
import TeamName from './team-name';
import dimensions from '../dimensions';

const teamBox = css({ display: 'flex' });

const AwayTeam = ({ name, color }) => (
  <div className={ teamBox }>
    <TeamName name={ name } />
    <Band color={ color } css={{ marginLeft: dimensions.gutter }} />
  </div>
);

AwayTeam.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default AwayTeam;
