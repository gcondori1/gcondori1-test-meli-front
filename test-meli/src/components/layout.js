import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './layout.sass';
import Searcher from './atoms/searcher/searcher';

export default function Layout({ children }) {
  return (
    <div className="LayoutContainer">
      <head>
        <title>Mercado Libre</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <Searcher />
        {children}
      </body>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
