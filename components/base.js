import React, { PropTypes } from 'react';
import Head from 'next/head';
import { insertGlobal } from 'next/css';

const Base = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        {
          `@font-face{
            font-family: PremierSans-Bold;
            src: url(static/PremierLeagueW01-Bold.eot?#iefix);
            src: url(static/PremierLeagueW01-Bold.eot?#iefix) format("eot"),
              url(static/PremierLeagueW01-Bold.woff2) format("woff2"), url(static/PremierLeagueW01-Bold.woff) format("woff"), url(static/PremierLeagueW01-Bold.ttf) format("truetype");
          }`
        }
      </style>
      <link rel="shortcut icon"
        href="https://cdn.zeit.co/favicon/favicon.ico" />
    </Head>
    { children }
  </div>
);

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;

insertGlobal('html, body', {
  margin: 0,
  overflow: 'hidden',
});
