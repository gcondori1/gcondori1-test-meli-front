import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Searcher from './atoms/searcher/searcher';

export default function Layout({ children }) {
  return (
    <div>
      <head>
        <title>Mercado Libre</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
      <div>
        <Searcher />
      </div>
      <div>{children}</div>
      </body>
      <footer>
        
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
