'use client'
import styles from './CartView.module.css'

interface CartViewProps {
  onBack: () => void
}

export default function ProductView({ onBack }: CartViewProps) {

  return (
    <div className={styles.product}>
      {/* Left: Large image */}
      <div className={styles.imagePanel}>
        <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url(https://avatars.githubusercontent.com/u/106414989?v=4)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.crossH} />
          <div className={styles.crossV} />
          <span className={styles.placeholderTag}>TECHWEAR JACKET</span>
        </div>
        {/* Corner brackets */}
        <div className={`${styles.corner} ${styles.tl}`} />
        <div className={`${styles.corner} ${styles.br}`} />
      </div>

      {/* Right: Product info */}
      <div className={styles.infoPanel}>
        <div className={styles.titleRow}>
          <h1 className={styles.productName}>
            Heya, I am <span className={styles.bracket}>Tijl Pleuger</span>
          </h1>
        </div>

        <div className={styles.price}>ABOUT ME</div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[GENERAL INFO]</span>
            <p className={styles.specText}>
              As you can see, my name is <span className={styles.bracket}>Tijl Pleuger</span> and I am a <span className={styles.bracket}>Software Developer</span> from <span className={styles.bracket}>Limburg</span> in the <span className={styles.bracket}>Netherlands </span> 
              My passion lies in creating innovative software solutions that make a difference. With a strong background in programming and problem-solving, I enjoy tackling complex challenges and turning ideas into reality. When I'm not coding, you can find me exploring new technologies, gaming, or spending time with friends and family.
            </p>
            {/* <img src="https://avatars.githubusercontent.com/u/106414989?v=4" alt="" /> */}
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[SPECIALTIES]</span>
            <p className={styles.specText}>
              <span><img style={{width: 32}} src="/html.png" alt="" /> </span>
              <span><img style={{width: 32}} src="/css.png" alt="" /> </span>
              <span><img style={{width: 32}} src="/javaScript.png" alt="" /> </span>
              <span><img style={{width: 32, backgroundColor: '#fff'}} src="/NextJs.svg" alt="" /> </span>
              <span><img style={{width: 32}} src="/cSharp.png" alt="" /> </span>
              <span><img style={{width: 32}} src="/python.png" alt="" /> </span>
              <span><a href=""><img style={{width: 32}} src="/supabase.webp" alt="" /></a> </span>
            </p>
          </div>
        </div>

        <button className={styles.backBtn} onClick={onBack}>
          ← BACK TO SELECTION
        </button>
      </div>
    </div>
  )
}
