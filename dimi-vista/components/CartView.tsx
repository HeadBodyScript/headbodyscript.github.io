'use client'
import styles from './CartView.module.css'

export default function CartView() {
  return (
    <div className={styles.cart}>
      <div className={styles.inner}>
        <h2 className={styles.title}>[ CART ]</h2>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>○</span>
          <p className={styles.emptyText}>YOUR CART IS EMPTY</p>
          <p className={styles.emptySubtext}>[ BROWSE THE STORE ]</p>
        </div>
      </div>
    </div>
  )
}
