import React from 'react';
import { AltParagraph } from '../text';
import { clrs } from '../../styles';
import css from 'next/css';

const body = css({ color: clrs.midGray });

const DocsBody = (props) => (
  <AltParagraph css={ body } lh='copy' { ...props } />
);

DocsBody.propTypes = {};

export default DocsBody;
