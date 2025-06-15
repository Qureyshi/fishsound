// pages/404.tsx
import React from 'react';
import styles from './404.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <div className={styles.container}>
     <Image
        className={styles.logo}
        src="/images/logo/logo0.svg"
        alt="Logo"
        width={100}
        height={100}
      /> 
      <p className={styles.message}>
        Axtardığınız səhifə tapılmayıb və ya işləmir
      </p>
      <h1 className={styles.errorCode}>404</h1>
      <Link href="/" className={styles.link}>
        Ana səhifəyə qayıt
      </Link>
    </div>
  );
};

export default Custom404;
