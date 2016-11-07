import React from 'react';
import DocsHeading from './docs-heading';
import DocsBody from './docs-body';
import { AltSpan } from '../text';
import { clrs } from '../../styles';
import css from 'next/css';
import { abbrs } from '../../clubs';

const readme = css({
  margin: '8rem auto 0 auto',
  maxWidth: '48rem',
  padding: '0 2rem',
});

const dynamic = css({ color: clrs.silver, marginRight: '0.2em' });

const Documentation = () => (
  <main className={ readme }>
    <DocsHeading level={ 1 }>
      ⚽🏆 Premier League
    </DocsHeading>
    <DocsBody>
      A microservice for generating score clocks and formations.
    </DocsBody>

    <DocsHeading level={ 2 }>
      ⏩ /next?club=<AltSpan css={ dynamic }>:team</AltSpan>
    </DocsHeading>
    <DocsBody>
      Retrieves the promo for the next game of a chosen club.
    </DocsBody>

    <DocsHeading level={ 2 }>
      ⏱ /scoreclock?home=
      <AltSpan css={ dynamic }>:home_team</AltSpan>&away=
      <AltSpan css={ dynamic }>:away_team</AltSpan>
    </DocsHeading>
    <DocsBody>
      Retrieves the score clock for the match between the chosen teams.
    </DocsBody>

    <DocsHeading level={ 2 }>
      🔤 Team Abbreviations
    </DocsHeading>
    <DocsBody>
      {
        abbrs.map((abbr, idx) => (
          <span key={ idx } style={{ marginRight: '0.75rem' }}>{ abbr } </span>
        ))
      }
    </DocsBody>
  </main>
);

Documentation.propTypes = {};

export default Documentation;
