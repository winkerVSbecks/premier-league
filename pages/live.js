import React, { PropTypes } from 'react';
import Base from '../components/base';
import StadiumContainer from '../components/stadium-container';
import LiveScoreClock from '../components/live-score-clock';

const Live = ({ url: { query: { home, away } } }) => (
  <Base>
    <StadiumContainer>
      <LiveScoreClock { ...{ home, away } } />
    </StadiumContainer>
  </Base>
);

Live.propTypes = {
  url: PropTypes.object.isRequired,
};

export default Live;
