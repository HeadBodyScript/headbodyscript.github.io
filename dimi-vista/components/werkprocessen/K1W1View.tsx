'use client'
import Link from 'next/dist/client/link'
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
            Plant werkzaamheden en bewaakt de voortgang <span className={styles.bracket}>[k1-w2]</span>
          </h1>
          <span className={styles.nameJp}>[Design software]</span>
        </div>

        <div className={styles.price}>Eisen/wensen<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[PREPERATION]</span>
            <p className={styles.specTextInfo}>
              Before we document anything we first have to familiarize ourselves with the requirements.
              To do so we will have to talk to the client and ask them what they want, what their needs are and what they expect from the software. We will also have to do some research on already existing software and see what this kind of software does and what kind of software we can use as a reference.
            </p>
            <br />
            <p className={styles.specTextMain}>
              It is important to not that this project is within a company where I am the intern. I am the only person that continuously works on this project and I am the only one that has a clear understanding of the requirements. This means that I will have to do all the communication with the client and gather all the information myself. This also means that I will have to do all the documentation myself and make sure that it is clear and concise for everyone to understand.
              So for my preperation we have a meeting scheduled with the client. Multiple people will be present at this meeting including the project manager and a co-worker that has previously worked in this project. They are present for obvious reasons. Such a reason includes the fact that the co-worker can help me and the client understand the limitations of the project and to make sure I don't overestimate the expectations of the client.
              Before the meeting I have familiarized myself with the project and the tools that we use at the company. I have also looked at the documentation that we have for the project and I have made a list of questions that I want to ask the client during the meeting. This is to make sure that I don't forget anything and that I get all the information that I need to document the requirements correctly.
              Side note: I have also had to familiarize myself with software such as git, Jira, BitBucket and Atlassen. These are applications that we use at the company to manage our projects and to keep track of our progress.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[DOCUMENTING REQUIREMENTS]</span>
            <p className={styles.specTextInfo}>
              After speaking with the client and gathering all necessary information, we will document the requirements in a clear and concise manner.
              To do this we will use the MoSCoW method to prioritize the requirements and make sure that we have a clear understanding of what the client wants and needs. We will also use user stories to document the requirements in a way that is easy to understand and that can be used as a reference throughout the development process.
            </p>
            <br />
            {/* <p className={styles.specTextMain}> */}
              <ul className={styles.specTextMain}>
                <li>Must have
                  <ul>
                    <li>Redesign the front-end of the dashboard to a <Link className='specText' href="https://en.wikipedia.org/wiki/V-model"><strong style={{color: "#d4c832"}}>V-cycle</strong></Link> view</li>
                    <li>The dashboard must have an additional chart that displays information from previous cycles (<span className={styles.specTextInfo}>for additional context please read the documentation for the Dashboard</span>)</li>
                    <li>The dashboard must have a <Link className='specText' href="https://en.wikipedia.org/wiki/Traceability_matrix"><strong style={{color: "#d4c832"}}>tracability matrix</strong></Link> that tracks the status / percentage of completed items within a chart</li>
                  </ul>
                </li>
                <li>Should have
                  <ul>
                    <li>The user should be able to make their own configuration</li>
                  </ul>
                </li>
                <li>Could have
                  <ul>
                    <li>the <Link className='specText' href="https://en.wikipedia.org/wiki/Traceability_matrix"><strong style={{color: "#d4c832"}}>tracability matrix</strong></Link> could use icons to display progress <span>(Green, yellow, red)</span></li>
                  </ul>
                </li>
                <li>Wont have</li>
              </ul>
            {/* </p> */}
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[VALIDATING REQUIREMENTS]</span>
            <p className={styles.specTextInfo}>
              To make sure that we have a clear understanding of the requirements and that we have documented them correctly, we will validate the requirements with the client. This will be done by presenting the documented requirements to the client and asking for their feedback. We will also ask for their approval to make sure that we are on the right track and that we are meeting their needs and expectations.
            </p>
            <br />
            <p className={styles.specTextMain}>
              In order to validate the requirements I will build a prototype of the software. This will allow me to present the client with a visual representation of the software and get their feedback on the design and functionality. I will also use the prototype to test the usability of the software and make sure that it meets the needs of the users.
            </p>
          </div>
        </div>

        <div className={styles.divider} />


        <div className={styles.price}>Planning<span className={styles.bracket}> [T1]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[ATLASSIAN]</span>
            <p className={styles.specTextInfo}>
              In order to plan the development of the software, we will use Atlassian's Jira to create a project and to manage our tasks. We will create user stories for each requirement and we will use the MoSCoW method to prioritize the user stories. We will also use Jira to keep track of our progress and to make sure that we are on track to meet our deadlines.
            </p>
            <br />
            <p className={styles.specTextMain}>
              Here is the Kanban board that is created for this project
              Here you can see the user stories for the task 'Task Name'
            </p>
          </div>
          <img className='image-max' src="ticket.png" alt="" />

        </div>

        <div className={styles.divider} />

        <div className={styles.price}>Bewaken voortgang<span className={styles.bracket}> [T2]</span></div>

        <div className={styles.divider} />

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[ATLASSIAN]</span>
            <p className={styles.specTextInfo}>
              In atlassian's Jira we will also keep track of our progress and make sure that we are on track to meet our deadlines.
            </p>
            <br />
            <p className={styles.specTextMain}>
              Here is an example of a task that is in progress
            </p>
          </div>
          <img className='image-max' src="timeTracking.jfif" alt="" />
        </div>

        <button className={styles.backBtn} onClick={onBack}>
          ← BACK TO SELECTION
        </button>
      </div>
    </div>
  )
}
