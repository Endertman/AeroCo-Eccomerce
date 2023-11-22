import React from 'react';

const Images = ({ product }) => {
  const generateImagePaths = (product) => {
    const { brand, name, gender, type} = product;
    const imgPaths = Array.from({ length: product.img }, (_, index) => ({
      id: index + 1,
      path: `src/assets/img/${brand}/${name}/${gender}/${type}/${index + 1}.webp`,
    }));
    return imgPaths;
  };

  const imagePaths = generateImagePaths(product);

  return (
    <div>
      {imagePaths.map(({ id, path }) => (
        <img
          key={id}
          src={path}
          alt={`Imagen ${id} de ${product.item}`}
        />
      ))}
    </div>
  );
};

export default Images;
