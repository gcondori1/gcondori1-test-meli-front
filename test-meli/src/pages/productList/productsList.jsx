import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { useLocation } from 'react-router-dom';
import { getProductListByQuery } from '../../api/productApi';
import CustomList from '../../components/atoms/customList/customList';
import Spinner from '../../components/atoms/spinner/spinner';
import Message from '../../components/atoms/message/message';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery();

  const fetchProducts = async () => {
    const search = query.get('search');
    const { data, errors } = await getProductListByQuery(search);
    if (data && !errors) {
      setProducts(data.items);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout title="ProductList">
      <div className="ProductListContainer">
      {loading ? 
          <Spinner /> :
          products.length ? 
          <CustomList items={products} /> 
          : <Message msg={"La búsqueda obtuvo 0 resultados"} />
        }
      </div>
    </Layout>
  );
}
