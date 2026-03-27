import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './ScrollStack.module.css';

const Card = ({ item, index, total, scrollYProgress }) => {
  const topOffset = 120 + index * 30; 
  
  const targetScale = 1 - (total - index - 1) * 0.05;
  
  const startRange = index / total;
  const endRange = startRange + (1 / total);

  // Dynamic zoom out when the next card overtakes it
  const scale = useTransform(scrollYProgress, [startRange, endRange], [1, targetScale]);

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `${topOffset}px`,
        scale,
        zIndex: index + 1,
        width: '100%',
        transformOrigin: "top center",
      }}
      className={styles.cardContainer}
    >
      {item}
    </motion.div>
  );
};

// Detect Android once at module level (safe: navigator exists in browser)
const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

export default function ScrollStack({ items }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Always call useSpring (Rules of Hooks) — but only USE it on non-Android.
  // On Android the spring physics re-calculate every frame on the JS thread,
  // causing jank. Raw scrollYProgress is compositor-driven and stutter-free.
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
    mass: 0.5
  });

  const smoothProgress = isAndroid ? scrollYProgress : springProgress;

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
