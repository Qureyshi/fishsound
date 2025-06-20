'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'  // burada əlavə olunur
import styles from './styles.module.scss'
import Search from '@/components/icons/Search'
import Home from '@/components/icons/Home'
import Location from '@/components/icons/Location'
import Announce from '@/components/icons/Announce'
import Playlist from '@/components/icons/Playlist'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()  // hazırkı URL path

  // Aktiv linki yoxlamaq üçün funksiya
  const isActive = (href: string) => pathname === href

  return (
    <>
      <button
        aria-label='Open Sidebar'
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)}></div>}

      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <nav>
          <ul>
            <li>
              <Link 
                href="/profile"
                className={`${styles.link} ${isActive('/profile') ? styles.active : ''}`}
              >
                <Home />Ana Səhifə
              </Link>
            </li>
            <li>
              <Link 
                href="/profile/search" 
                className={`${styles.link} ${isActive('/profile/search') ? styles.active : ''}`}
              >
                <Search />Axtar
              </Link>
            </li>
            <li>
              <Link 
                href="/profile/location" 
                className={`${styles.link} ${isActive('/profile/location') ? styles.active : ''}`}
              >
                <Location />Məkanlar
              </Link>
            </li>
            <li>
              <Link 
                href="/profile/announce" 
                className={`${styles.link} ${isActive('/profile/announce') ? styles.active : ''}`}
              >
                <Announce />Anonslar
              </Link>
            </li>
            <li>
              <Link 
                href="/profile/playlist" 
                className={`${styles.link} ${isActive('/profile/playlist') ? styles.active : ''}`}
              >
                <Playlist />Pleylistlərim
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
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
