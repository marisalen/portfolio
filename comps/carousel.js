import React, { useState } from 'react';
import styles from '@/styles/Project.module.css';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = images.length;

  const goToNextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const goToPrevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <img
          src={images[currentImage]}
          alt="Project Image"
          className={styles.carouselImg}
        />
        <button className={styles.carouselBtnPrev} onClick={goToPrevImage}>
          &#8249;
        </button>
        <button className={styles.carouselBtnNext} onClick={goToNextImage}>
          &#8250;
        </button>
      </div>
      <div className={styles.carouselIndicators}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselIndicator} ${
              index === currentImage && styles.active
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

