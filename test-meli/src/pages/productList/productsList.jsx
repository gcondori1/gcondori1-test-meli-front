import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { useLocation } from 'react-router-dom';
import { getProductListByQuery } from '../../api/productApi';
import CustomList from '../../components/atoms/customList/customList';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const query = useQuery();

  const fetchProducts = async () => {
    const search = query.get('search');
    const { data, errors } = await getProductListByQuery(search);
    console.log(data);
    if (!errors) {
      setProducts(data.items);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout title="ProductList">
      <div className="TitleContainer">
        <CustomList items={products} />
      </div>
    </Layout>
  );
}
