import React, { PropTypes } from 'react';
import { merge } from 'next/css';
import { font, altFont, typeScale, lhScale, fwScale } from '../styles';

export const Text = ({
  css,
  tag = 'span',
  size = 4,
  alt,
  center,
  fw = 300,
  caps,
  lh = 'solid',
  ...props
}) => {
  const Tag = tag;
  const sx = {
    fontFamily: alt ? altFont : font,
    fontSize: typeScale[size],
    fontWeight: fwScale[fw],
    textAlign: center ? 'center' : null,
    textTransform: caps ? 'uppercase' : null,
    lineHeight: lhScale[lh],
  };

  return <Tag { ...props } className={ merge(sx, css) } />;
};

export const LeadText = (props) => <Text { ...props } tag='p' size={ 3 } />;
export const Caps = (props) => <Text { ...props } caps />;
export const MetaText = (props) => <Text { ...props } size={ 5 } caps />;
export const AltSpan = (props) => (
  <Text size={ 5 } { ...props } tag='span' alt />
);
export const AltParagraph = (props) => (
  <Text size={ 5 } { ...props } tag='p' alt />
);

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.number,
  alt: PropTypes.bool,
  center: PropTypes.bool,
  fw: PropTypes.number,
  caps: PropTypes.bool,
  lhScale: PropTypes.oneOf(['solid', 'title', 'copy']),
  css: PropTypes.object,
};
