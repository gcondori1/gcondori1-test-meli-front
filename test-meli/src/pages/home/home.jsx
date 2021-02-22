import React from 'react';
import Landing from '../../components/atoms/landing/landing';
import Layout from '../../components/layout';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="TitleContainer">
        <Landing />
      </div>
      <p>Mercado Libre</p>
      <p>Donde comprar y vender de todo</p>
    </Layout>
  );
}
