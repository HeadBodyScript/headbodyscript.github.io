'use client'
import styles from './Nav.module.css'

interface NavProps {
  onNavigate?: (page: string) => void
  currentPage?: string
}

export default function Nav({ onNavigate, currentPage }: NavProps) {
  return (
    <nav className={styles.nav}>
      <button
        className={`${styles.navItem} ${currentPage === 'werkprocessen' ? styles.active : ''}`}
        onClick={() => onNavigate?.('werkprocessen')}
      >
        WERKPROCESSEN
      </button>
      <button
        className={`${styles.navItem} ${currentPage === 'aboutme' ? styles.active : ''}`}
        onClick={() => onNavigate?.('aboutme')}
      >
        OVER MIJ
      </button>
      {/* <button
        className={`${styles.navItem} ${currentPage === 'projects' ? styles.active : ''}`}
        onClick={() => onNavigate?.('projects')}
      >
        PROJECTEN
      </button> */}
    </nav>
  )
}
