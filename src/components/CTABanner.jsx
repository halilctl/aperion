import styles from './CTABanner.module.css'

export default function CTABanner() {
  const scrollToContact = () => {
    document.querySelector('#iletişim')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="iletişim">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.bg} />

          <div className={styles.content}>
            <span className="mono" style={{ display: 'block', marginBottom: '20px' }}>Bir Sonraki Adım</span>
            <h2 className={styles.title}>
              Projenizi Birlikte<br />
              <em>Hayata Geçirelim.</em>
            </h2>
            <p className={styles.sub}>
              Fikirinizi dinlemek için buradayız. İlk görüşme ücretsiz.
            </p>

            <div className={styles.actions}>
              <button className="btn-primary" onClick={scrollToContact} id="cta-banner-btn">
                <span>İletişime Geç</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="mailto:hello@aperion.com.tr" className={styles.email}>
                hello@aperion.com.tr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
