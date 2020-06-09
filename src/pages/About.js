import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>Acerca de</h1>
        <p>
         Este es un modelo de prueba en tensorflow de código abierto
        </p>
      </div>
    );
  }
}
