import styles from './Compass.module.css'

export default function Compass() {
  return (
    <div className={styles.compass}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="17" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
        <circle cx="18" cy="18" r="2" fill="rgba(255,255,255,0.6)"/>
        {/* N needle */}
        <polygon points="18,4 16,18 18,16 20,18" fill="white" opacity="0.9"/>
        {/* S needle */}
        <polygon points="18,32 16,18 18,20 20,18" fill="rgba(255,255,255,0.3)"/>
        {/* E needle */}
        <polygon points="32,18 18,16 20,18 18,20" fill="rgba(255,255,255,0.3)"/>
        {/* W needle */}
        <polygon points="4,18 18,16 16,18 18,20" fill="rgba(255,255,255,0.3)"/>
        {/* Cardinal labels */}
        <text x="16.5" y="11" fill="white" fontSize="4" fontFamily="Barlow Condensed" fontWeight="600" opacity="0.7">N</text>
        <text x="16.5" y="29" fill="white" fontSize="4" fontFamily="Barlow Condensed" opacity="0.4">S</text>
        <text x="28" y="19.5" fill="white" fontSize="4" fontFamily="Barlow Condensed" opacity="0.4">E</text>
        <text x="5" y="19.5" fill="white" fontSize="4" fontFamily="Barlow Condensed" opacity="0.4">W</text>
      </svg>
    </div>
  )
}
