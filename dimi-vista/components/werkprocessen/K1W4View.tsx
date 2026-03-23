'use client'
import styles from './WerkprocessenView.module.css'

interface WerkprocessenViewProps {
  onBack: () => void
}

export default function ProductView({ onBack }: WerkprocessenViewProps) {

  return (
    <div className={styles.product}>
      <div className={styles.imagePanel}>
        <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url(./empty.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.crossH} />
          <div className={styles.crossV} />
          <span className={styles.placeholderTag}>TECHWEAR JACKET</span>
        </div>
        <div className={`${styles.corner} ${styles.tl}`} />
        <div className={`${styles.corner} ${styles.br}`} />
      </div>

      <div className={styles.infoPanel}>
        <div className={styles.titleRow}>
          <h1 className={styles.productName}>
            TEST SOFTWARE <span className={styles.bracket}>[k1-w4]</span>
          </h1>
          <span className={styles.nameJp}>[TEST software]</span>
        </div>

        <div className={styles.price}>Testplan<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[AANLEIDING]</span>
            <p className={styles.specText}>
              Binnen het project van mijn stage is het momenteel niet mogelijk om een testplan te maken omdat we nog niet ver genoeg zijn in het ontwikkelpocen.
              Als alternatief heb ik een testplan gemaakt voor het HBO project waar ik nu mee bezig ben. In dit project ontwerpen we een netwerk dat gebruikt maakt van DNS en DHCP.
              Je kan meet lezen in het testplan zelf
            </p>
          </div>
        </div>

        <div className={styles.divider} />


        <div className={styles.price}>Testscenario<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[NETWERK]</span>
            <p className={styles.specText}>
              De opdracht was on een netwerk the ontwerpen dat gebruik maakt van DHCP en DNS. Het netwrk heeft minimaal 1 IOT apperaat, 1 telefoon, 1 laptop en 1 printer.
            </p>
            <img src="hbo/NetwerkPlan.png" alt="" />
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[BESTAND]</span>
            <p className={styles.specText}>
              Hoe dit netwerk wordt getest is te vinden in het <a href="hbo/testplan.docx">Test Plan</a>
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.price}>Testen<span className={styles.bracket}> [T2]</span></div>

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

        <div className={styles.price}>Testrapport<span className={styles.bracket}> [T3]</span></div>

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
