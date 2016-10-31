import React, { PropTypes } from 'react';
import css from 'next/css';
import clrs from '../clrs';
import dimensions from '../dimensions';

const scoreBox = css({
  width: dimensions.width,
  height: dimensions.height,
  backgroundColor: clrs.green,
  color: clrs.purple,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  lineHeight: 1,
  boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )',
  fontFamily: 'PremierSans-Bold,Gotham,Arial,Helvetica Neue,Helvetica,sans-serif'
});

const Score = ({ home, away }) => (
  <div className={ scoreBox }>
    { `${ home } - ${ away }` }
  </div>
);

Score.propTypes = {
  home: PropTypes.number.isRequired,
  away: PropTypes.number.isRequired,
};

export default Score;
