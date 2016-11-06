import React, { PropTypes } from 'react';
import css from 'next/css';
import { sizeScale, clrs } from '../../styles';
import { Text } from '../text';

const scoreBox = css({
  width: sizeScale[2],
  height: sizeScale[0],
  backgroundColor: clrs.green,
  color: clrs.purple,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )',
});

const Score = ({ home = 0, away = 0 }) => (
  <div className={ scoreBox }>
    <Text size={ 3 } fw={ 6 }>{ home } - { away }</Text>
  </div>
);

Score.propTypes = {
  home: PropTypes.number,
  away: PropTypes.number,
};

export default Score;
