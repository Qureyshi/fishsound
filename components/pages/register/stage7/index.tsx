'use client';
import React from 'react';
import styles from './styles.module.scss';

//import { FaArrowRight } from 'react-icons/fa';

export default function PlaylistNotification() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.tag}>💎 playlist hazırdır</span>
      <div className={styles.container}>
        <p>
          Seçimləriniz əsasında müəssisənizə <span className={styles.highlight}>XXXX</span> pleylist uyğunlaşdırdıq. Onlar indi musiqi kitabxananızdadır!
        </p>
        <button className={styles.nextBtn}>
          Növbəti{/* <FaArrowRight />*/}
        </button>
      </div>
    </div>
  );
}
