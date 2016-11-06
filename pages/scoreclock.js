import React, { Component } from 'react';
import Live from '../src/containers/live';
import { getFixture } from '../src/services/fixture';

export default class extends Component {
  static async getInitialProps ({ query: { home, away } }) {
    return getFixture(home, away);
  }

  render () {
    const { home, away, score, time } = this.props;
    return <Live home={ home } away={ away } score={ score } time={ time } />;
  }
}
