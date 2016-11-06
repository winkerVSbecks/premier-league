import React, { PropTypes } from 'react';
import Base from '../components/base';
import StadiumContainer from '../components/stadium-container';
import ScoreClock from '../components/score-clock/';

const Live = ({ home, away, score, time }) => (
  <Base>
    <StadiumContainer>
      <ScoreClock home={ home }
        away={ away }
        score={ score }
        time={ time } />
    </StadiumContainer>
  </Base>
);

Live.propTypes = {
  home: PropTypes.object.isRequired,
  away: PropTypes.object.isRequired,
  score: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired,
};

export default Live;
