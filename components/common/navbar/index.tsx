import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles["navbar"]}>
      <Image
        className={styles["logo"]}
        src="/images/logo/logo0.svg"
        alt="Logo"
        width={100}
        height={100}
      />

      <div className={styles["nav_links"]}>
        <div className={styles["nav_link"]}>
          <Link className={styles["link"]} href="/">Ana səhifə</Link>
        </div>
        <div className={styles["nav_dot"]}></div>
        <div className={styles["nav_link"]}>
          <Link className={styles["link"]} href="/howwork">Necə işləyir</Link>
        </div>
        <div className={styles["nav_dot"]}></div>
        <div className={styles["nav_link"]}>
          <Link className={styles["link"]} href="/business">Biznes tipləri</Link>
        </div>
        <div className={styles["nav_dot"]}></div>
        <div className={styles["nav_link"]}>
          <Link className={styles["link"]} href="/pricing">Qiymət</Link>
        </div>
        <div className={styles["nav_dot"]}></div>
        <div className={styles["nav_link"]}>
          <Link className={styles["link"]} href="/contact">Əlaqə</Link>
        </div>
        <div className={styles["nav_dot"]}></div>
        <div className={styles["nav_link"]}>
          <Link className={`${styles["link"]} ${styles["login_btn"]}`} href="/login">Daxil ol</Link>
        </div>
      </div>
    </div>
  );
}
