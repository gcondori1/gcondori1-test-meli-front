import Home from '../pages/home/home';
import ProductList from '../pages/productList/productsList';
import ProductDetail from '../pages/producDetail/productDetail'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/items" component={ProductList}/>
      <Route path="/item/:id" component={ProductDetail}/>
    </Router>
  )
}