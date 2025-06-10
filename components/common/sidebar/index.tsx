// components/Sidebar.tsx
'use client'
import { useState } from 'react'
import styles from './styles.module.scss'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside className={styles.sidebar}>
      <div className={styles.mobileHeader}>
        <button onClick={() => setOpen(!open)} className={styles.toggleBtn}>
          ☰
        </button>
      </div>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </aside>
  )
}
