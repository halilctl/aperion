import styles from './ScrollStack.module.css';

const Card = ({ item, index, total }) => (
  <div
    className={styles.cardContainer}
    style={{
      '--target-scale': 1 - (total - index - 1) * 0.05,
      top: `${80 + index * 30}px`,
      zIndex: index + 1,
    }}
  >
    {item}
  </div>
);

export default function ScrollStack({ items }) {
  return (
    <div className={styles.stackContainer}>
      {items.map((item, index) => (
        <Card key={index} item={item} index={index} total={items.length} />
      ))}
    </div>
  );
}
