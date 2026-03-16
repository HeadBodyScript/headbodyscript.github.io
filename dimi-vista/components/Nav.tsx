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
        className={`${styles.navItem} ${currentPage === 'store' ? styles.active : ''}`}
        onClick={() => onNavigate?.('store')}
      >
        WERKPROCESSEN
      </button>
      <button
        className={`${styles.navItem} ${currentPage === 'cart' ? styles.active : ''}`}
        onClick={() => onNavigate?.('cart')}
      >
        OVER MIJ
      </button>
      <button
        className={`${styles.navItem} ${currentPage === 'login' ? styles.active : ''}`}
        onClick={() => onNavigate?.('login')}
      >
        PROJECTEN
      </button>
    </nav>
  )
}
