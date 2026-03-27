import styles from './Process.module.css'

const steps = [
  { num: '01', title: 'Keşif & Analiz', desc: 'İş hedeflerinizi, hedef kitlenizi ve rekabetçi konumunuzu derinlemesine analiz ediyoruz.' },
  { num: '02', title: 'Strateji & Plan', desc: 'Bulgulara dayalı olarak net bir yol haritası ve ölçülebilir başarı kriterleri belirliyoruz.' },
  { num: '03', title: 'Tasarım & Prototip', desc: 'Kullanıcı merkezli tasarımlar oluşturarak geri bildirimlerle iteratif şekilde geliştiriyoruz.' },
  { num: '04', title: 'Geliştirme & Test', desc: 'Modern teknolojilerle hayata geçirip, kapsamlı testlerle kaliteyi güvence altına alıyoruz.' },
  { num: '05', title: 'Lansman & Büyüme', desc: 'Projenizi yayına alıyor ve kesintisiz destek ile performansı sürekli optimize ediyoruz.' },
]

export default function Process() {
  return (
    <section className={styles.section} id="süreç">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Çalışma Sürecimiz</div>
          <h2 className={styles.title}>
            Başarıya Giden<br /><em>Beş Adım</em>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step} id={`process-step-${i + 1}`}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepLine}>
                <div className={styles.dot} />
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
