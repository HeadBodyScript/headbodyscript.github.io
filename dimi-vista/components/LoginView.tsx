'use client'
import { useState } from 'react'
import styles from './LoginView.module.css'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.login}>
      <div className={styles.panel}>
        <div className={styles.topLabel}>[ AUTHENTICATION ]</div>
        <h2 className={styles.title}>c.FUTURE</h2>
        <p className={styles.subtitle}>身の上 — ACCESS PORTAL</p>

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>[EMAIL]</label>
            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="user@domain.com"
              autoComplete="off"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>[PASSWORD]</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button className={styles.submitBtn}>
            ENTER
          </button>

          <div className={styles.links}>
            <button className={styles.link}>FORGOT PASSWORD</button>
            <button className={styles.link}>CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
