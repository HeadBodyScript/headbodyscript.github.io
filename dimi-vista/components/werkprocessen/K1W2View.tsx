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
            ONTWERPT SOFTWARE <span className={styles.bracket}>[k1-w2]</span>
          </h1>
          <span className={styles.nameJp}>[Design software]</span>
        </div>

        <div className={styles.price}>Ontwerp<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[THE DEMO]</span>
            <p className={styles.specTextInfo}>
              We created a demo of the software to show the client a visualization of the software and to get feedback on the design. The demo is a simple prototype that shows the main features of the software and how it will look like.
            </p>
            <br />
            <p className={styles.specTextMain}>
              Here you can see the following new features of the software:
            </p>
            <br />
              <ul className={styles.specTextMain}>
                <li>New features
                  <ul>
                    <li>A V-cycle style front-end</li>
                    <li>An additional chart that displays information from previous cycles</li>
                    <li>A traceability matrix that tracks the status / percentage of completed items within a chart</li>
                    <li>A tab where a user can configure their preferences</li>
                    <li>Icons that display the status of a task</li>
                  </ul>
                </li>
              </ul>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[WIREFRAME]</span>
            <p className={styles.specText}>
              Here is a simple wireframe of the software that is clickable.
            </p>
            <a href="wireframe.html">wireframe</a>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[SIMPLE DESIGN CHANGES]</span>
            <p className={styles.specText}>
              In order to visualize the new features and to get feedback from the client, we made some simple design changes to the software. These design changes include:
            </p>
              <img src="/k1w2-2.jfif" alt="" />
            <p className={styles.specText}>
              After this design was approved by the client, we started with the development of the software. Here you can see the final design of the software that is currently being developed.
            </p>
              <img src="/k1w2-1.jfif" alt="" />
              <p className={styles.specText}>
              As you can see, the design is simple and clean, with a focus on usability and functionality. The new features are integrated seamlessly into the design, making it easy for users to navigate and use the software.
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
              Bij de veranderingen die we hebben gemaakt aan het ontwerp van de software, moeten we ook de schematechnieken aanpassen. 
              Hier is een DRAW.sql wat aangeeft hoe de nieuwe database structuur eruit zal zien.
            </p>
            <img src="draw.png" alt="DRAW.sql" />
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
