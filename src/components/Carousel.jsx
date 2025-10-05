import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

export default function Carousel({
  items = [],
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
  round = false
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!autoplay || isPaused || items.length <= 1) return;

    autoplayRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        if (loop) {
          return (prev + 1) % items.length;
        }
        return prev < items.length - 1 ? prev + 1 : 0;
      });
    }, autoplayDelay);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, autoplayDelay, isPaused, items.length, loop]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => {
      if (loop) {
        return prev === 0 ? items.length - 1 : prev - 1;
      }
      return prev > 0 ? prev - 1 : prev;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      if (loop) {
        return (prev + 1) % items.length;
      }
      return prev < items.length - 1 ? prev + 1 : prev;
    });
  };

  if (!items || items.length === 0) {
    return <div className="carousel-empty">No items to display</div>;
  }

  const currentItem = items[currentIndex];

  return (
    <div 
      className={`carousel-container ${round ? 'carousel-round' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ maxWidth: baseWidth }}
    >
      <div className="carousel-content">
        <div className="carousel-icon-wrapper">
          {currentItem.icon}
        </div>
        <h3 className="carousel-title">{currentItem.title}</h3>
        <p className="carousel-description">{currentItem.description}</p>
      </div>

      <div className="carousel-controls">
        <button 
          className="carousel-button carousel-button-prev" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="carousel-button carousel-button-next" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}
