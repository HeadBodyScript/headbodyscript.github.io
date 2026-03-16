'use client'
import { useState } from 'react'
import styles from './ProductView.module.css'

interface ProductViewProps {
  onBack: () => void
}

export default function ProductView({ onBack }: ProductViewProps) {
  const [selectedSize, setSelectedSize] = useState('S')
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className={styles.product}>
      {/* Left: Large image */}
      <div className={styles.imagePanel}>
        <div className={styles.imagePlaceholder}>
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
            TESTc.FUTURE <span className={styles.bracket}>[W]</span>
          </h1>
          <span className={styles.nameJp}>[身の上]</span>
        </div>

        <div className={styles.price}>$129.99</div>

        <div className={styles.divider} />

        <div className={styles.sizeSection}>
          <span className={styles.label}>[SIZE]</span>
          <div className={styles.sizes}>
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className={`${styles.addToCart} ${added ? styles.added : ''}`}
          onClick={handleAddToCart}
        >
          {added ? '[ ADDED ]' : 'ADD TO CART'}
        </button>

        <div className={styles.specs}>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[TECHNICAL CLOTHING]</span>
            <p className={styles.specText}>
              This techwear jacket is equipped with a multitude of storage pockets to easily
              carry your personal belongings.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[BREATHABLE MATERIALS]</span>
            <p className={styles.specText}>
              This techwear jacket is made of polyester, cotton and spandex and can be
              worn all year round.
            </p>
          </div>
          <div className={styles.specBlock}>
            <span className={styles.specTitle}>[WATER RESISTANT]</span>
            <p className={styles.specText}>
              Treated with DWR coating for light rain and moisture resistance.
            </p>
          </div>
        </div>

        <button className={styles.backBtn} onClick={onBack}>
          ← BACK TO STORE
        </button>
      </div>
    </div>
  )
}
