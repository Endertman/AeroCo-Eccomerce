import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// const data = require('../assets/data/data.json');

function Carousel () {
    const [carrousel_images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('src/assets/data/data.json');
              const data = await response.json();
              setImages(data.carrousel_images);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carrousel_images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex - 1 + carrousel_images.length) % carrousel_images.length
        );
    };

    return (
        <>
            <CarouselContainer>
                <Buttons>
                    <button onClick={prevImage}>Anterior</button>
                        <Images src={carrousel_images[currentImageIndex]} alt={`Imagen ${currentImageIndex}`}/>
                    <button onClick={nextImage}>Siguiente</button>
                </Buttons>
            </CarouselContainer>
        </>
    )
}

export default Carousel;

const CarouselContainer = styled.div`
    
`;

const Buttons = styled.div`

`;

const Images = styled.img`

`;
