import BlurText from './reactbits/BlurText'
import ScrollStack from './reactbits/ScrollStack'
import styles from './Services.module.css'

const services = [
  {
    title: 'SEO & Analitik',
    desc: 'Organik görünürlüğünüzü artırarak hedef kitlenize doğal yollarla ulaşıyoruz. Teknik altyapıdan içerik stratejisine tam huni optimizasyonu.',
    bg: '/bg1.png',
  },
  {
    title: 'UI/UX Tasarım',
    desc: 'Kullanıcı davranışlarını analiz ederek, dönüşüm odaklı ve estetik arayüzler tasarlıyoruz. Wireframe\'den nihai interaktif protipe.',
    bg: '/bg2.png',
  },
  {
    title: 'Web Tasarım',
    desc: 'Markanızı dijital dünyada en iyi şekilde temsil eden, tamamen özgün, çarpıcı ve modern web siteleri kurguluyoruz.',
    bg: '/bg3.png',
  },
  {
    title: 'Web Yazılım',
    desc: 'Ölçeklenebilir, güvenli ve yüksek performanslı web uygulamaları geliştiriyoruz. En modern teknoloji stack\'leri ile.',
    bg: '/bg1.png',
  },
  {
    title: 'Dijital Pazarlama',
    desc: 'Hedef kitlenize ulaşmak için veriye dayalı kampanyalar yönetiyoruz. Performans odaklı algoritmik büyüme stratejileri.',
    bg: '/bg2.png',
  },
  {
    title: 'Prodüksiyon',
    desc: 'Markanızın sesini ve görüntüsünü en yüksek kalitede sunuyoruz. Kreatif video prodüksiyon, kurgu ve post-prodüksiyon süreçleri.',
    bg: '/bg3.png',
  },
  {
    title: 'Fotoğraf Çekimi',
    desc: 'Ürün, mekan ve kurumsal fotoğraf çekimleri ile markanızı görsel dünyada en güçlü, en net şekilde konumlandırıyoruz.',
    bg: '/bg1.png',
  },
]

export default function Services() {
  const stackItems = services.map((svc, index) => {
    return (
      <div key={index} className={styles.cardWrapper}>
        <div className={styles.cardBorder} />
        <div className={styles.card}>
          <div 
            className={styles.cardBg} 
            style={{ 
              backgroundImage: `url('/bg1.png')`,
              animationDelay: `${index * -4.5}s`
            }} 
          />
          <div className={styles.cardOverlay} />
          <div className={styles.cardContent}>
            <h3 className={styles.svcTitle}>{svc.title}</h3>
            <p className={styles.svcDesc}>{svc.desc}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className={styles.section} id="hizmetler">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Hizmetlerimiz</div>
          <h2 className={styles.title}>
            <BlurText text="Tüm Dijital İhtiyaçlarınız" delay={25} />
            <br />
            <em><BlurText text="Tek Çatı Altında" delay={40} /></em>
          </h2>
        </div>

        <ScrollStack items={stackItems} />
      </div>
    </section>
  )
}
