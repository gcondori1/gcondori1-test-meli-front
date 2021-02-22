import logo from './logo.svg';
import './App.css';
import Routes from './routes/routes';
import ProductList from './pages/productList/productsList';
import ProductDetail from './pages/producDetail/productDetail'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes />
      </div>
  );
}

export default App;
