'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { cn } from '@/lib';
import { motion, useAnimationFrame } from 'motion/react';

import Img1 from '/public/images/IndustryImages/industry-image-1.png';
import Img2 from '/public/images/IndustryImages/industry-image-2.png';
import Img3 from '/public/images/IndustryImages/industry-image-3.jpg';
import Img4 from '/public/images/IndustryImages/industry-image-4.png';
import Img5 from '/public/images/IndustryImages/industry-image-5.png';
import Energy from '/public/images/industry/energy.png';
import Finanical from '/public/images/industry/Finanical.png';
import Logistics from '/public/images/industry/Logistics.png';
import Manufactoring from '/public/images/industry/Manufactoring.png';
import RealEstate from '/public/images/industry/Real estate.png';
import Healthcare from '/public/images/industry/healthcare image.png';

// const images = [Img1, Img2, Img3, Img4, Img5];
const images = [Energy, Finanical, Logistics, Manufactoring, RealEstate, Healthcare];

// Card dimensions
const CARD_WIDTH = 402;
// const GAP = 30;
const GAP = 40;
const CARD_TOTAL = CARD_WIDTH + GAP;

export default function Carousel({ className }: { className?: string }) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1440);
  const [cardDimensions, setCardDimensions] = useState({ width: 402, gap: 40 });

  // Get container width on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);

        // Update card dimensions based on screen width
        if (width < 640) {
          // Mobile
          setCardDimensions({ width: 280, gap: 16 });
        } else if (width < 1024) {
          // Tablet
          setCardDimensions({ width: 320, gap: 24 });
        } else {
          // Desktop
          setCardDimensions({ width: 402, gap: 40 });
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Smooth animation - cards slide from LEFT to RIGHT
  useAnimationFrame((time) => {
    // Speed: pixels per millisecond (adjust for faster/slower)
    const speed = 0.06;
    setOffset(time * speed);
  });

  const { width: CARD_WIDTH, gap: GAP } = cardDimensions;
  const CARD_TOTAL = CARD_WIDTH + GAP;

  // Calculate how many cards we need to fill the screen + buffer
  const totalCards = Math.ceil(containerWidth / CARD_TOTAL) + 6;
  const centerX = containerWidth / 2;

  // Generate cards array
  const cards = [];
  for (let i = 0; i < totalCards; i++) {
    cards.push({
      img: images[i % images.length],
      index: i,
    });
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full flex justify-center items-end h-[420px] max-lg:h-[380px] max-sm:h-[320px] overflow-hidden',
        className
      )}
      style={{
        perspective: '1200px',
        perspectiveOrigin: 'center 80%',
      }}
    >
      <div className="absolute bottom-0 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {cards.map(({ img, index }) => {
          // Calculate card position with offset (moving right to left visually, so cards come from left)
          const baseX = index * CARD_TOTAL - offset;
          // Wrap around for infinite loop
          const wrappedX =
            ((baseX % (totalCards * CARD_TOTAL)) + totalCards * CARD_TOTAL) % (totalCards * CARD_TOTAL);
          // Position relative to container start
          const cardX = wrappedX - CARD_TOTAL * 2;

          // Distance from center (for 3D effect)
          const distanceFromCenter = cardX + CARD_WIDTH / 2 - centerX;
          const normalizedDistance = distanceFromCenter / (containerWidth / 2);

          // 3D transforms based on distance from center
          const rotateY = normalizedDistance * -25; // Rotate towards center
          const rotateX = Math.abs(normalizedDistance) * 8;
          const skewX = normalizedDistance * -2;
          const translateY = Math.abs(normalizedDistance) * 40;
          const scale = 1 - Math.abs(normalizedDistance) * 0.15;
          const zIndex = Math.round((1 - Math.abs(normalizedDistance)) * 10);

          return (
            <motion.div
              key={`${index}-${CARD_WIDTH}`} // Force re-render on width change
              className="absolute bottom-0 origin-bottom"
              style={{
                left: cardX,
                transform: `
                  translateY(${translateY}px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  skewX(${skewX}deg)
                  scale(${Math.max(0.7, scale)})
                `,
                transformStyle: 'preserve-3d',
                zIndex: Math.max(1, zIndex),
              }}
            >
              <div
                className="relative rounded-3xl overflow-hidden bg-white/10 shadow-2xl border-[6px] border-white/40 transitions-all duration-300"
                style={{ width: `${CARD_WIDTH}px`, height: 'auto', aspectRatio: '402/360' }}
              >
                <Image
                  src={img}
                  alt={`Industry Image ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 402px"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
