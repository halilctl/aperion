import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 50,
  className = '',
  animateBy = 'words'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(8px)', opacity: 0, y: 15 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * (delay / 1000),
            ease: "easeOut"
          }}
          style={{ display: animateBy === 'words' ? 'inline-block' : 'inline', willChange: 'filter, transform, opacity' }}
        >
          {element}{animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}
