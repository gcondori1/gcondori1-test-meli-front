import React from 'react';
import Landing from '../../components/atoms/landing/landing';
import Layout from '../../components/layout';
import './home.sass';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="HomeContainer">
        <Landing />
      </div>
    </Layout>
  );
}
