import React from 'react';
import './RecursiveFractal.css';

const RecursiveFractal = ({ depth = 5, size = 300, x = 0, y = 0, rotation = 0 }) => {
  if (depth === 0) return null;

  const childSize = size * 0.5;
  const positions = [
    { x: -size * 0.35, y: -size * 0.35, rotation: rotation + 45 },
    { x: size * 0.35, y: -size * 0.35, rotation: rotation - 45 },
    { x: -size * 0.35, y: size * 0.35, rotation: rotation - 45 },
    { x: size * 0.35, y: size * 0.35, rotation: rotation + 45 },
  ];

  return (
    <div 
      className="fractal-node"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${depth * 0.1}s`
      }}
    >
      <div className="fractal-core" />
      {positions.map((pos, index) => (
        <RecursiveFractal
          key={index}
          depth={depth - 1}
          size={childSize}
          x={pos.x}
          y={pos.y}
          rotation={pos.rotation}
        />
      ))}
    </div>
  );
};

export default RecursiveFractal;