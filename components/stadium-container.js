import React, { PropTypes } from 'react';
import css, { before, after, merge } from 'next/css';
import clrs from '../clrs';

const fieldBase = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const fieldBefore = before({
  content: `''`,
  position: 'absolute',
  left: '-2.5vw',
  top: '-2.5vh',
  width: '105vw',
  height: '105vh',
  zIndex: -2,
  backgroundColor: clrs.darkGreen,
  backgroundImage: `url('static/stadium.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  filter: 'blur(10px)',
});

const fieldAfter = after({
  content: `''`,
  position: 'absolute',
  left: '-2.5vw',
  top: '-2.5vh',
  width: '105vw',
  height: '105vh',
  zIndex: -1,
  backgroundColor: clrs.darkGreen,
  opacity: 0.5,
  mixBlendMode: 'exclusion',
});

const field = merge(fieldBase, fieldBefore, fieldAfter);

const StadiumContainer = ({ children }) => (
  <main className={ field }>
    { children }
  </main>
);

StadiumContainer.propTypes = {
  children: PropTypes.node,
};

export default StadiumContainer;
