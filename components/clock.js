import React, { PropTypes } from 'react';
import css from 'next/css';
import clrs from '../clrs';
import dimensions from '../dimensions';
import { formattedTime } from '../utils';

const scoreBox = css({
  width: dimensions.width,
  height: dimensions.height,
  backgroundColor: clrs.white,
  color: clrs.purple,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  lineHeight: 1,
  margin: '0 auto',
  fontFamily: 'PremierSans-Bold,Gotham,Arial,Helvetica Neue,Helvetica,sans-serif'
});

const Time = ({ time }) => (
  <div className={ scoreBox }>
    { formattedTime(time) }
  </div>
);

Time.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Time;
