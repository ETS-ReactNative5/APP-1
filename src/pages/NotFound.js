import React from 'react';
import './NotFound.css';

/**
 * This is rendered when a route is not found (404).
 */
export default () =>
  <div className="NotFound">
    <h1>404</h1>
    <h3>La página que buscas no existe.</h3>
    <a href="/">Volver a Home</a>
  </div>;
