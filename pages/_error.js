import React from 'react';
import css from 'next/css';
import Base from '../src/components/base';
import { AltParagraph } from '../src/components/text';
import Heading from '../src/components/heading';
import Link from 'next/link'

const readme = css({
  margin: '8rem auto 0 auto',
  maxWidth: '48rem',
  padding: '0 2rem',
});

const Index = () => (
  <Base>
    <main className={ readme }>
      <Heading level={ 1 }>
        ⚠️ Error
      </Heading>
      <AltParagraph lh='copy'>
        Make sure you provided correct team abbriviations. See the full list on the <Link href="/"><a>home page</a></Link>.
      </AltParagraph>
    </main>
  </Base>
);

Index.propTypes = {};

export default Index;
