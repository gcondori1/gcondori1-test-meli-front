import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import ProductList from '../pages/productList/productsList';
import ProductDetail from '../pages/productDetail/productDetail';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/items" component={ProductList} />
      <Route path="/item/:id" component={ProductDetail} />
    </Router>
  );
}
