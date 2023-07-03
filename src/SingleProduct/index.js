

import { useParams, Link } from 'react-router-dom';
import React,{ useState, useEffect, useCallback } from 'react';


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
    <>
   
      <h1> {product.title} </h1>
      <div>
        {/* <img src={product.images[0]} /> */}
        <p>DESCRIPTION: {product.description}</p>
        <span>{product.price} ksh</span>
      </div>

      <Link to="/">
        <button>LOGOUT</button>
      </Link>
    </>
  );
};

export default SingleProduct;
