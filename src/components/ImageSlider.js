import React, { useState, useRef } from 'react';

const ImageSlider = ({ oldImage, newImage }) => {
  const [imageReveal, setimageReveal] = useState(0.5);
  const [isDrag, setIsDrag] = useState(false);
  const imageContainer = useRef(null);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    if (!isDrag) {
      setIsDrag(true);
    }
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
      setIsDrag(false);
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
        src={oldImage}
        alt="Before"
        className="pointer-events-none rounded-md"
        width="auto"
        height="auto"
      />
      <img
        src={newImage}
        alt="After"
        width="auto"
        height="auto"
        style={{
          clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${
            imageReveal * 100
          }% 100%, 0 100%)`,
        }}
        className="absolute inset-0 pointer-events-none rounded-md"
      />
      <div
        style={{ left: `${imageReveal * 100}%` }}
        className="absolute inset-y-0"
      >
        <div className="relative h-full">
          <div className="absolute inset-y-0 bg-white w-1  -ml-0.5 "></div>
          <div
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            role="button"
            tabIndex={0}
            className={`group h-10 md:h-14 w-10 md:w-14 -ml-5 md:-ml-7 -mt-5 md:-mt-7 rounded-full  ${
              isDrag ? 'bg-primary' : 'bg-white'
            } hover:bg-primary absolute top-1/2 shadow-4xl flex justify-center items-center`}
          >
            <span
              className={`font-bold group-hover:text-white text-xs md:text-sm ${
                isDrag ? 'text-white' : 'text-primary'
              }`}
            >
              Drag
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
