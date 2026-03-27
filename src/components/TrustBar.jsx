import { useEffect, useRef, useState } from 'react'
import styles from './TrustBar.module.css'

const stats = [
  { value: 120, suffix: '+', label: 'Tamamlanan Proje' },
  { value: 8, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 40, suffix: '+', label: 'Mutlu Müşteri' },
  { value: 98, suffix: '%', label: 'Müşteri Memnuniyeti' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 1800, animate)
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>
        <span>{count}</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  )
}

export default function TrustBar() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animate={animate} />
          ))}
        </div>
        <div className="glow-line" style={{ marginTop: '60px' }} />
      </div>
    </section>
  )
}
