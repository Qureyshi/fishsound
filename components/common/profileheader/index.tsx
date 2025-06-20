'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';
import User from '@/components/icons/User';
import Close from '@/components/icons/Close';

export default function ProfileHeader() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.link}>
          <Image
            className={styles.logo}
            src="/images/logo/logo1.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <Link href="/profile/account" className={styles.profile}>
          Hesabım <User />
        </Link>
      </header>

      {showAnnouncement && (
        <div className={styles.announcement}>
          SINAQ MÜDDƏTİNİN BİTMƏSİNƏ 5 GÜN QALIB
          <div className={styles.close} onClick={() => setShowAnnouncement(false)}>
            <Close />
          </div>
        </div>
      )}
    </>
  );
}
