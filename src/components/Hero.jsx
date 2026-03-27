import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animFrame
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        o: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(142,154,175,${(1 - dist / 130) * 0.12})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(142,154,175,${p.o})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      animFrame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToContact = () => {
    document.querySelector('#iletişim')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.querySelector('#hizmetler')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="hero">
      <div className="grid-bg" />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={`container ${styles.content}`}>
        {/* Label */}
        <div className={styles.label}>
          <span className="mono">Teknoloji & Dijital Ajans</span>
          <span className={styles.dot} />
        </div>

        {/* H1 */}
        <h1 className={styles.h1}>
          <span className={styles.h1Line}>Dijitalin</span>
          <span className={`${styles.h1Line} ${styles.h1Italic}`}>Sınırlarını</span>
          <span className={styles.h1Line}>Yeniden Çiziyoruz.</span>
        </h1>

        {/* H2 */}
        <p className={styles.sub}>
          Stratejiden koda, tasarımdan üretime —<br />
          markanızı geleceğe taşıyan entegre dijital çözümler.
        </p>



        {/* Scroll indicator */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className="mono" style={{ fontSize: '0.62rem' }}>Aşağı Kaydır</span>
        </div>
      </div>

      {/* Gradient bottom fade */}
      <div className={styles.gradientFade} />
    </section>
  )
}
