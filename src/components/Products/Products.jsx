import React, { useState, useEffect } from 'react';
import Images from './Images';

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/assets/data/products.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {data.map(product => (
        <div key={product.id}>
          <h2>{product.item}</h2>
          <Images product={product} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;