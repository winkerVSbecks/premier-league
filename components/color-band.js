import React, { PropTypes } from 'react';
import css, { merge } from 'next/css';
import dimensions from '../dimensions';

const band = css({
  width: dimensions.band,
  height: dimensions.height,
});

const ColorBand =  ({ color, css = {} }) => (
  <div className={ merge(band, css, { backgroundColor: color }) } />
);

ColorBand.propTypes = {
  color: PropTypes.string.isRequired,
  css: PropTypes.object,
};

export default ColorBand;
