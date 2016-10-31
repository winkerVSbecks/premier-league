import React, { PropTypes } from 'react';
import css from 'next/css';
import ColorBand from './color-band';
import TeamName from './team-name';
import dimensions from '../dimensions';

const teamBox = css({ display: 'flex' });

const HomeTeam = ({ name, color }) => (
  <div className={ teamBox }>
    <ColorBand color={ color } css={{ marginRight: dimensions.gutter }} />
    <TeamName name={ name } />
  </div>
);

HomeTeam.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default HomeTeam;
