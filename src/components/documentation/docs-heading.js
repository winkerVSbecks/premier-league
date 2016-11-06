import React from 'react';
import Heading from '../heading';
import { clrs } from '../../styles';
import css from 'next/css';

const title = css({ marginTop: '4rem', color: clrs.black });

const DocsHeading = (props) => (
  <Heading css={ title } size={ 5 } alt { ...props } />
);

DocsHeading.propTypes = {};

export default DocsHeading;
