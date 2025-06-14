'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button - mobile */}
      <button
        aria-label='Open Sidebar'
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Overlay for mobile */}
      {open && <div className={styles.overlay} onClick={() => setOpen(false)}></div>}

      {/* Sidebar menu */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <nav>
          <ul>
            <li>
              <Link href="/profile">Ana Səhifə</Link>
            </li>
            <li>
              <Link href="/profile/search">Axtar</Link>
            </li>
            <li>
              <Link href="/profile/location">Məkanlar</Link>
            </li>
            <li>
              <Link href="/profile/announce">Anonslar</Link>
            </li>
            <li>
              <Link href="/profile">Pleylistlərim</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {/* Seçilmişlər */}
        <h3>Seçilmişlər</h3>
        <ul>
          <li>Playlistin Adı</li>
          <li>Playlistin Adı</li>
          <li>Playlistin Adı</li>
          <li>Playlistin Adı</li>
        </ul>
      </aside>
    </>
  )
}
