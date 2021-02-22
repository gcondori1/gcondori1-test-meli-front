import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/itemDetail';
import { getProductById } from '../../api/productApi';
import Layout from '../../components/layout';
import Spinner from '../../components/spinner/spinner';
import Message from '../../components/message/message';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchProduct = async () => {
    const { data, errors } = await getProductById(id);
    if (!errors) {
      setProduct(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Layout title="ProductDetail">
      <div className="ProductDetailContainer">
        {loading
          ? <Spinner />
          : product
            ? <ItemDetail item={product.item} />
            : <Message msg={'El producto no existe'} />}
      </div>
    </Layout>
  );
}
