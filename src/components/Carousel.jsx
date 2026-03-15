import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faExternalLinkAlt, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import './Carousel.css';

// Helper to get badge color based on status
const getStatusColor = (status) => {
    switch(status) {
        case "Ongoing": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
        case "Coming Soon": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
        default: return "bg-[#1ed760]/10 text-[#1ed760] border-[#1ed760]/20"; // Completed
    }
};

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 24;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.title ?? index}-${index}`}
      className="carousel-item"
      style={{
        width: itemWidth,
        rotateY: rotateY,
      }}
      transition={transition}
    >
      {/* 👇 YOUR EXACT PROJECT CARD DESIGN 👇 */}
      <div className="group relative bg-[#181818] w-full min-h-[400px] h-full rounded-xl p-6 border border-white/5 hover:bg-[#282828] transition-colors duration-300 ease-in-out flex flex-col pointer-events-auto">
          
          {/* Header: Folder Icon + Status Badge */}
          <div className="flex justify-between items-start mb-6">
              <div className="text-[#1ed760] text-3xl">
                  <FontAwesomeIcon icon={faFolderOpen} />
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                  {item.status === "Ongoing" && <FontAwesomeIcon icon={faCodeBranch} className="mr-1" />}
                  {item.status}
              </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#1ed760] transition-colors">
              {item.title}
          </h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
              {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto mb-4">
              {item.techStack.map((tech, key) => (
                  <span key={key} className="text-xs font-mono text-[#1ed760]">
                      {tech}
                  </span>
              ))}
          </div>
          
          {/* Link Button */}
          {item.status !== "Coming Soon" && (
              <div className="pt-4 border-t border-white/5 flex justify-end">
                  <a 
                      href={item.link} 
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                  >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
              </div>
          )}
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = [],
  baseWidth = 380, // Made wider to perfectly fit your cards
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;
    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;
    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }
    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }
    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;
    if (direction === 0) return;
    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex = items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className="carousel-container"
      style={{ width: `${baseWidth}px` }}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.title ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      
      <div className="carousel-indicators-container">
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}