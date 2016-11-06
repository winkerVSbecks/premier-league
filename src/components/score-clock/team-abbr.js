import React, { PropTypes } from 'react';
import css from 'next/css';
import { sizeScale, clrs } from '../../styles';
import { Text } from '../text';

const teamAbbr = css({
  width: sizeScale[2],
  height: sizeScale[0],
  backgroundColor: clrs.purple,
  color: clrs.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
});

const TeamAbbr =  ({ name }) => (
  <div className={ teamAbbr }>
    <Text size={ 3 } fw={ 6 }>{ name }</Text>
  </div>
);

TeamAbbr.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TeamAbbr;
