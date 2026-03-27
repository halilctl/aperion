import styles from './Footer.module.css'

const links = {
  Hizmetler: ['SEO', 'UI/UX Tasarım', 'Web Tasarım', 'Web Yazılım', 'Dijital Pazarlama', 'Prodüksiyon', 'Fotoğraf'],
  Şirket: ['Hakkımızda', 'Sürecimiz', 'Blog', 'Kariyer'],
  İletişim: ['hello@aperion.com.tr', '+90 (212) 000 00 00', 'İstanbul, Türkiye'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="glow-line" />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>A</span>
              <span className={styles.logoText}>APERION</span>
            </div>
            <p className={styles.tagline}>
              Teknoloji, Yazılım &amp;<br />Dijital Ajans
            </p>
            <div className={styles.socials}>
              {['LinkedIn', 'Instagram', 'Behance', 'GitHub'].map((s) => (
                <a key={s} href="#" className={styles.social} aria-label={s}>{s}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat} className={styles.col}>
              <h4 className={styles.colTitle}>{cat}</h4>
              <ul className={styles.colList}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.colLink}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Aperion. Tüm hakları saklıdır.
          </span>
          <span className={styles.copy}>
            Türkiye'de ❤️ ile tasarlandı ve geliştirildi.
          </span>
        </div>
      </div>
    </footer>
  )
}
