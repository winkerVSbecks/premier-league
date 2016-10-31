import React, { PropTypes } from 'react';
import Base from '../components/base';
import StadiumContainer from '../components/stadium-container';
import ScoreClock from '../components/score-clock';

const Index = ({ url: { query: { home, away, score } } }) => (
  <Base>
    <StadiumContainer>
      <ScoreClock home={ home }
        away={ away }
        score={ score.split(',') }
        time={ '90:00' } />
    </StadiumContainer>
  </Base>
);

Index.propTypes = {
  url: PropTypes.object.isRequired,
};

export default Index;
