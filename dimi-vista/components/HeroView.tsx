'use client'
import { useEffect, useState } from 'react'
import styles from './HeroView.module.css'

interface HeroViewProps {
  onEnter: () => void
}

export default function HeroView({ onEnter }: HeroViewProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`${styles.hero} ${visible ? styles.visible : ''}`} onClick={onEnter}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.line1}>TIJL PLEUGER</span>
          <span className={styles.line2}>SOFTWARE DEVELOPER</span>
        </h1>
        <p className={styles.sub}>[ CLICK TO ENTER ]</p>
      </div>
      <div className={styles.particles}>
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
          }} />
        ))}
      </div>
    </div>
  )
}
