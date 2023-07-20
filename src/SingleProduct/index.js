

import { useParams, Link } from 'react-router-dom';
import React,{ useState, useEffect, useCallback } from 'react';
import './styles.css'

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className='single'>
   
      <h1> {product.title} </h1>
      <div>
        <img src={product.thumbnail} />
        <p>DESCRIPTION: {product.description}</p>
        <p>{product.price} ksh</p>
      </div>

      {/* <Link to="/">
        <button>LOGOUT</button>
      </Link> */}
    </div>
  );
};

export default SingleProduct;
