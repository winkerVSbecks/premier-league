import React, { PropTypes } from 'react';
import css from 'next/css';
import { sizeScale, clrs } from '../../styles';
import { formattedTime } from '../../utils';
import { Text } from '../text';

const scoreBox = css({
  width: sizeScale[2],
  height: sizeScale[0],
  backgroundColor: clrs.white,
  color: clrs.purple,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
});

const Time = ({ time }) => (
  <div className={ scoreBox }>
    <Text size={ 3 } fw={ 6 }>{ formattedTime(time) }</Text>
  </div>
);

Time.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Time;
