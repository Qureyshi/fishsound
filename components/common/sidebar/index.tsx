'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import Search from '@/components/icons/Search'
import Home from '@/components/icons/Home'
import Location from '@/components/icons/Location'
import Announce from '@/components/icons/Announce'
import Playlist from '@/components/icons/Playlist'

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
              <Link  className={styles.link} href="/profile"><Home/>Ana Səhifə</Link>
            </li>
            <li>
              <Link  className={styles.link} href="/profile/search"><Search/>Axtar</Link>
            </li>
            <li>
              <Link  className={styles.link} href="/profile/location"><Location/>Məkanlar</Link>
            </li>
            <li>
              <Link  className={styles.link} href="/profile/announce"><Announce/>Anonslar</Link>
            </li>
            <li>
              <Link  className={styles.link} href="/profile/playlist"><Playlist/>Pleylistlərim</Link>
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
