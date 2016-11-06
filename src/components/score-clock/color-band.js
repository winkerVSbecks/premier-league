import React, { PropTypes } from 'react';
import css, { merge } from 'next/css';
import { dimensions, sizeScale } from '../../styles';

const band = css({
  width: dimensions.band,
  height: sizeScale[0],
});

const ColorBand =  ({ color, css = {} }) => (
  <div className={ merge(band, css, { backgroundColor: color }) } />
);

ColorBand.propTypes = {
  color: PropTypes.string.isRequired,
  css: PropTypes.object,
};

export default ColorBand;
