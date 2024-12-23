import React, { useState, useEffect } from 'react';

const images = [
    { src: './image/banner2.jpg', title: 'Explore the World', description: 'Discover amazing places with us!' },
    { src: './image/banner3.jpg', title: 'Adventure Awaits', description: 'Let us plan your dream trip!' },
    { src: './image/banner1.avif', title: 'Travel With Us', description: 'Experience the journey of a lifetime.' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);
    const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    return (
        <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
            {/* Full-Width Image */}
            <img
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                onError={(e) => (e.target.src = './image/default.jpg')}
            />

            {/* Title and Description */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                borderRadius: '10px',
                width: '80%',
            }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{images[currentIndex].title}</h2>
                <p style={{ fontSize: '1.2rem' }}>{images[currentIndex].description}</p>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%)',
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
            >
                &#10094; {/* Left Arrow */}
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
            >
                &#10095; {/* Right Arrow */}
            </button>

            {/* Dots */}
            <div style={{ textAlign: 'center', position: 'absolute', bottom: '20px', width: '100%' }}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            margin: '0 5px',
                            backgroundColor: currentIndex === index ? 'blue' : 'gray',
                            borderRadius: '50%',
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
