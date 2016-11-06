import React, { PropTypes } from 'react';
import css from 'next/css';
import Band from './color-band';
import TeamAbbr from './team-abbr';
import { dimensions } from '../../styles';

const teamBox = css({ display: 'flex' });

const AwayTeam = ({ name, color }) => (
  <div className={ teamBox }>
    <TeamAbbr name={ name } />
    <Band color={ color } css={{ marginLeft: dimensions.gutter }} />
  </div>
);

AwayTeam.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default AwayTeam;
