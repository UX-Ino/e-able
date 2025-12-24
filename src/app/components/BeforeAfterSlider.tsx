import { useState } from "react";
import { motion } from "motion/react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "개선 전",
  afterLabel = "개선 후"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
      role="img"
      aria-label={`${beforeLabel}와 ${afterLabel} 비교 슬라이더`}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 px-4 py-2 rounded-md shadow-lg" style={{ backgroundColor: "var(--brand-black)", color: "var(--brand-white)" }}>
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Overlay with clip-path) */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-75"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 px-4 py-2 rounded-md shadow-lg" style={{ backgroundColor: "var(--brand-red)", color: "var(--brand-white)" }}>
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-20"
        style={{
          left: `${sliderPosition}%`,
          backgroundColor: "var(--brand-white)",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
        }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-2xl"
          style={{ backgroundColor: "var(--brand-white)" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="슬라이더 핸들"
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              setSliderPosition(Math.max(0, sliderPosition - 5));
            } else if (e.key === "ArrowRight") {
              setSliderPosition(Math.min(100, sliderPosition + 5));
            }
          }}
        >
          <div className="flex gap-1">
            <div className="w-0.5 h-6 rounded-full" style={{ backgroundColor: "var(--brand-black)" }} />
            <div className="w-0.5 h-6 rounded-full" style={{ backgroundColor: "var(--brand-black)" }} />
          </div>
        </motion.div>
      </div>

      {/* Red accent border */}
      <div className="absolute inset-0 pointer-events-none border-2 rounded-lg" style={{ borderColor: "var(--brand-red)" }} />
    </div>
  );
}
