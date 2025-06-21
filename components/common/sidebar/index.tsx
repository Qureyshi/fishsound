'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'
import Search from '@/components/icons/Search'
import Home from '@/components/icons/Home'
import Location from '@/components/icons/Location'
import Announce from '@/components/icons/Announce'
import Playlist from '@/components/icons/Playlist'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<'playlists' | 'announcements'>('playlists')

  const items = [
    { title: 'Pleylist 1', image: "/images/singleplaylist.png" },
    { title: 'Pleylist 2', image: "/images/singleplaylist.png" },
    { title: 'Pleylist 3', image: "/images/playlist_cover.jpg" },
    { title: 'Pleylist 4', image: "/images/singleplaylist.png" },
    { title: 'Pleylist 5', image: "/images/playlist_cover.jpg" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      <button
        aria-label="Open Sidebar"
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

        <div className={styles.container}>
          <h2>Seçilmişlər</h2>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'playlists' ? styles.active : ''}`}
              onClick={() => setActiveTab('playlists')}
            >
              Pleylistlər
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'announcements' ? styles.active : ''}`}
              onClick={() => setActiveTab('announcements')}
            >
              Anonslar
            </button>
          </div>

          <div className={styles.list}>
            {items.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <div className={styles.thumbnail}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={30}
                    height={30}
                    style={{ borderRadius: '6px' }}
                  />
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
