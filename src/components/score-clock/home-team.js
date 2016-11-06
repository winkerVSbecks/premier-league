import React, { PropTypes } from 'react';
import css from 'next/css';
import ColorBand from './color-band';
import TeamAbbr from './team-abbr';
import { dimensions } from '../../styles';

const teamBox = css({ display: 'flex' });

const HomeTeam = ({ name, color }) => (
  <div className={ teamBox }>
    <ColorBand color={ color } css={{ marginRight: dimensions.gutter }} />
    <TeamAbbr name={ name } />
  </div>
);

HomeTeam.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default HomeTeam;
