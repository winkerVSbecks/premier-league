import React, { PropTypes } from 'react';
import { merge } from 'next/css';
import { font, altFont, typeScale, fwBold, lhScale } from '../styles';

const Heading = ({
  css,
  level = 'h1',
  size = 4,
  alt,
  center,
  bold,
  caps,
  lh = 'solid',
  ...props
}) => {
  const Tag = `h${ level }`;
  const sx = {
    fontFamily: alt ? altFont : font,
    fontSize: typeScale[size],
    fontWeight: bold ? fwBold : null,
    textAlign: center ? 'center' : null,
    textTransform: caps ? 'uppercase' : null,
    lineHeight: lhScale[lh],
  };

  return <Tag { ...props } className={ merge(sx, css) } />;
};

Heading.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.number,
  alt: PropTypes.bool,
  center: PropTypes.bool,
  fw: PropTypes.number,
  caps: PropTypes.bool,
  lhScale: PropTypes.string,
  css: PropTypes.object,
};

export default Heading;
