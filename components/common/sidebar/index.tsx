'use client'
import { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button - mobile */}
      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Overlay for mobile */}
      {open && <div className={styles.overlay} onClick={() => setOpen(false)}></div>}

      {/* Sidebar menu */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <nav>
          <ul>
            <li><Link href="/profile">Profil</Link></li>
            <li><Link href="/settings">Tənzimləmələr</Link></li>
            <li><Link href="/logout">Çıxış</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
