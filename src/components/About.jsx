import styles from './About.module.css'

const pillars = [
  { title: 'Strateji', desc: 'Veriye dayalı kararlar ve net hedefler.' },
  { title: 'Tasarım', desc: 'Güzellik ile işlevselliği harmanlayan arayüzler.' },
  { title: 'Teknoloji', desc: 'Ölçeklenebilir, modern ve güvenli sistemler.' },
]

export default function About() {
  return (
    <section className={styles.section} id="hakkımızda">
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <div className="section-label">Hakkımızda</div>
            <h2 className={styles.title}>
              Biz Sadece Kod<br />
              Yazmıyoruz —<br />
              <em>Değer Üretiyoruz.</em>
            </h2>
            <p className={styles.body}>
              Aperion, teknolojiyi ve yaratıcılığı birleştirerek markalara
              rekabet avantajı sağlayan bütüncül bir dijital stüdyodur.
              Her projede derinlemesine analiz, titiz tasarım ve kusursuz
              teknik uygulama bir araya gelir.
            </p>
            <p className={styles.body}>
              Müşterilerimizle ortak hissettiğimiz değerler doğrultusunda
              uzun vadeli ilişkiler kurarak dijital başarılarını sürdürülebilir
              kılmak en büyük önceliğimizdir.
            </p>

            <div className={styles.pillars}>
              {pillars.map((p) => (
                <div key={p.title} className={styles.pillar}>
                  <span className={styles.pillarTitle}>{p.title}</span>
                  <span className={styles.pillarDesc}>{p.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — abstract visual */}
          <div className={styles.right}>
            <div className={styles.visual}>
              <div className={styles.ring} style={{ '--i': 0 }} />
              <div className={styles.ring} style={{ '--i': 1 }} />
              <div className={styles.ring} style={{ '--i': 2 }} />
              <div className={styles.innerDot} />
              <div className={styles.tagFloat} style={{ top: '12%', right: '8%' }}>
                <span className="mono">UI/UX</span>
              </div>
              <div className={styles.tagFloat} style={{ bottom: '18%', left: '6%' }}>
                <span className="mono">Web Dev</span>
              </div>
              <div className={styles.tagFloat} style={{ top: '55%', right: '6%' }}>
                <span className="mono">SEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
