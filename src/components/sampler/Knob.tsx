
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface KnobProps {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  size?: "sm" | "lg";
  label?: string;
  onChange?: (value: number) => void;
}

export const Knob = ({
  min = 0,
  max = 100,
  value = 50,
  step = 1,
  size = "sm",
  label,
  onChange
}: KnobProps) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startValue, setStartValue] = useState(value);

  const sizeStyles = {
    sm: "w-12 h-12",
    lg: "w-16 h-16"
  };

  useEffect(() => {
    const percentage = ((value - min) / (max - min)) * 100;
    setRotation(percentage * 2.7 - 135); // -135 to 135 degrees
  }, [value, min, max]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setStartValue(value);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaY = startY - e.clientY;
      const deltaValue = (deltaY / 100) * (max - min);
      const newValue = Math.min(max, Math.max(min, startValue + deltaValue));
      
      onChange?.(Math.round(newValue / step) * step);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startY, startValue, min, max, step, onChange]);

  return (
    <div className="relative flex flex-col items-center">
      {label && (
        <span className="text-xs text-gray-500 mb-2">{label}</span>
      )}
      <div 
        className={cn(
          "rounded-full bg-black cursor-pointer",
          sizeStyles[size]
        )}
        onMouseDown={handleMouseDown}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="absolute top-2 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2" />
      </div>
    </div>
  );
};
