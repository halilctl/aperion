import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './ScrollStack.module.css';

const Card = ({ item, index, total, scrollYProgress }) => {
  const topOffset = 120 + index * 30;
  const targetScale = 1 - (total - index - 1) * 0.05;
  const startRange = index / total;
  const endRange = startRange + (1 / total);
  const scale = useTransform(scrollYProgress, [startRange, endRange], [1, targetScale]);

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `${topOffset}px`,
        scale,
        zIndex: index + 1,
        width: '100%',
        transformOrigin: 'top center',
      }}
      className={styles.cardContainer}
    >
      {item}
    </motion.div>
  );
};

// Simple no-animation wrapper for mobile — prevents all Android Chrome glitches
const MobileCard = ({ item }) => (
  <div className={styles.mobileCard}>{item}</div>
);

export default function ScrollStack({ items }) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  // On mobile: render a plain list – zero JS scroll transforms, zero glitch
  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {items.map((item, index) => (
          <MobileCard key={index} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={styles.stackContainer}>
      <div className={styles.stackWrapper}>
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            total={items.length}
            scrollYProgress={smoothProgress}
          />
        ))}
      </div>
    </div>
  );
}
