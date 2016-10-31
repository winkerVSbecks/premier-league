import React, { PropTypes } from 'react';
import css from 'next/css';
import clrs from '../clrs';
import dimensions from '../dimensions';

const teamName = css({
  width: dimensions.width,
  height: dimensions.height,
  backgroundColor: clrs.purple,
  color: clrs.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  lineHeight: 1,
  textTransform: 'uppercase',
  fontFamily: 'PremierSans-Bold,Gotham,Arial,Helvetica Neue,Helvetica,sans-serif'
});

const TeamName =  ({ name }) => (
  <div className={ teamName }>
    { name }
  </div>
);

TeamName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TeamName;
