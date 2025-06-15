'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/icons/Menu';
import Close from '@/components/icons/Close';
//import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <div className="body_container">
    <div className={styles.navbar}>
      <Image
        className={styles.logo}
        src="/images/logo/logo0.svg"
        alt="Logo"
        width={100}
        height={100}
      />

      {/* Hamburger Icon     {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}             */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <Close/> : <Menu/>}
      </div>

      {/* Navigation Links */}
      <div
        className={`${styles.nav_links} ${menuOpen ? styles.show_menu : ''}`}
      >
        <div className={styles.nav_link}>
          <Link className={styles.link} href="/">Ana səhifə</Link>
        </div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_link}>
          <Link className={styles.link} href="/howwork">Necə işləyir</Link>
        </div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_link}>
          <Link className={styles.link} href="/business">Biznes tipləri</Link>
        </div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_link}>
          <Link className={styles.link} href="/pricing">Qiymət</Link>
        </div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_link}>
          <Link className={styles.link} href="/contact">Əlaqə</Link>
        </div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_link}>
          <Link className={`${styles.link} ${styles.login_btn}`} href="/auth">Daxil ol</Link>
        </div>
      </div>
    </div>
    </div>
  );
}
