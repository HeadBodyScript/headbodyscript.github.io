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
            REALISEERT (ONDERDELEN VAN) SOFTWARE <span className={styles.bracket}>[k1-w3]</span>
          </h1>
          <span className={styles.nameJp}>[Realized (parts of the) software]</span>
        </div>

        <div className={styles.price}>Gerealiseerde functionaliteit<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className={styles.divider} />


        <div className={styles.price}>Kwaliteit opgeleverde functionaliteiten<span className={styles.bracket}> [T1]</span></div>

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
        </div>

        <div className={styles.divider} />

        <div className={styles.price}>Kwaliteit code<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TITLE]</span>
            <p className={styles.specText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.price}>Versiebeheer<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[GITHUB]</span>
            <p className={styles.specText}>
              Hier kun je zien dat de code regelmatig gecommit is, met duidelijke commit messages, en dat er branches gebruikt worden voor nieuwe features of bug fixes. Dit geeft aan dat er een gestructureerde aanpak is voor het ontwikkelen van de software, wat bijdraagt aan de kwaliteit en onderhoudbaarheid ervan.
            </p>
          </div>
              <img className='image-max' src="github.png" alt="" />
        </div>

        <button className={styles.backBtn} onClick={onBack}>
          ← BACK TO SELECTION
        </button>
      </div>
    </div>
  )
}
