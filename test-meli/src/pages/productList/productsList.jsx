import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { useLocation } from 'react-router-dom';
import { getProductListByQuery } from '../../api/productApi';
import CustomList from '../../components/customList/customList';
import Spinner from '../../components/spinner/spinner';
import Message from '../../components/message/message';
import Categories from '../../components/categories/categories';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery();

  const fetchProducts = async () => {
    const search = query.get('search');
    const { data, errors } = await getProductListByQuery(search);
    if (data && !errors) {
      debugger;
      setProducts(data.items);
      setCategories(data.categories);
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
            <CustomList items={products} categories={categories} />
          : <Message msg={"La búsqueda obtuvo 0 resultados"} />
        }
      </div>
    </Layout>
  );
}
