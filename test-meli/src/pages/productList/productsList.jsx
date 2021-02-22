import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Layout from '../../components/layout';
import { getProductListByQuery } from '../../api/productApi';
import CustomList from '../../components/customList/customList';
import Spinner from '../../components/spinner/spinner';
import Message from '../../components/message/message';

const useQuery = () => new URLSearchParams(useLocation().search);

export default function ProductList() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = useQuery();
  /* eslint-disable no-unused-vars */
  history.listen((location, action) => {
    history.go(0);
  });

  const fetchProducts = async () => {
    setLoading(true);
    setProducts([]);
    const search = query.get('search');
    const { data, errors } = await getProductListByQuery(search);
    if (data && !errors) {
      setProducts(data.items);
      setCategories(data.categories);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Layout title="ProductList">
      <div className="ProductListContainer">
        {loading
          ? <Spinner />
          : products.length
            ? <CustomList items={products} categories={categories} />
            : <Message msg={'La búsqueda obtuvo 0 resultados'} />}
      </div>
    </Layout>
  );
}
