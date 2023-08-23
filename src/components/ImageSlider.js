import React, { useState } from 'react';

const ImageSlider = ({ oldImage, newImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    console.log('DOWN');
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    console.log('UP');
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newPosition = Math.max(0, Math.min(100, e.clientX));
      const movementX = e.movementX || e.webkitMovementX || 0;
      // console.log(movementX)
      // setPosition(movementX);
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <div className="relative flex">
        <img src={oldImage} alt="Old" className="w-full h-full" />
        <div
          className="absolute"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src={newImage} alt="New" className="w-full h-full" />
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           text-white text-lg font-bold w-16 h-16 border border-blue-700 
           rounded-full flex items-center justify-center cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ left: `${position}px` }}
        >
          Drag
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
