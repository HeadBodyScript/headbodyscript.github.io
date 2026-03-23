'use client'
import styles from './WerkprocessenView.module.css'

interface WerkprocessenViewProps {
  onBack: () => void
}

export default function ProductView({ onBack }: WerkprocessenViewProps) {

  return (
    <div className={styles.product}>
      {/* Left: Large image */}
      <div className={styles.imagePanel}>
        <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url(./empty.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            PRESENTEERT HET OPGELEVERDE WERK <span className={styles.bracket}>[k2-w2]</span>
          </h1>
          <span className={styles.nameJp}>[Design software]</span>
        </div>

        <div className={styles.price}>Ontwerp<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className={styles.divider} />


        <div className={styles.price}>Schematechniek<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.price}>Onderbouwing<span className={styles.bracket}> [T2]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
