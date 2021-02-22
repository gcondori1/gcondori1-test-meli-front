import React from 'react';
import mlNewLogo from '../../assets/065-mercadol.png';
import './landing.sass';

export default function Landing() {
  return (
    <div className="LandingContainer">
      <img src={mlNewLogo} alt="logo" />
      <div className="LandingText">
        <p>Mercado Libre</p>
        <p>Donde comprar y vender de todo</p>
      </div>
    </div>
  );
}
