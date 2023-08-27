import React, { useState, useRef } from 'react';

const ImageSlider = ({ oldImage, newImage }) => {
  const [imageReveal, setimageReveal] = useState(0.5);
  const imageContainer = useRef(null);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();

    setimageReveal(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };

  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = (e) => {
      slide(e.clientX);
    };

    window.onmouseup = (e) => {
      window.onmousemove = undefined;
      window.onmouseup = undefined;
    };
  };

  return (
    <div
      ref={imageContainer}
      className="max-w-lg w-full mx-auto  relative select-none"
    >
      <img
        src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
        alt="Before"
        className="pointer-events-none"
      />
      <img
        src="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
        alt="After"
        style={{
          clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${
            imageReveal * 100
          }% 100%, 0 100%)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />
      <div
        style={{ left: `${imageReveal * 100}%` }}
        className="absolute inset-y-0"
      >
        <div className="relative h-full">
          <div className="absolute inset-y-0 bg-white w-0.5  -ml-px"></div>
          <div
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className="h-6 w-6 -ml-3 -mt-3 rounded-full bg-white absolute top-1/2 shadow-4xl"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
