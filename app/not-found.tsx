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
        width={70}
        height={70}
      /> 
      <p className={styles.message}>
        Axtardığınız səhifə tapılmayıb və ya işləmir
      </p>
      <Image
        className={styles.errorCode}
        src="/images/404.png"
        alt="Logo"
        width={853}
        height={337}
      /> 
      <Link href="/" className={styles.link}>
        Ana səhifəyə qayıt
      </Link>
      <Image
        className={styles.ellipse1}
        src="/images/Ellipse1.png"
        alt="Logo"
        width={814}
        height={871}
      /> 
      <Image
        className={styles.ellipse2}
        src="/images/Ellipse2.png"
        alt="Logo"
        width={1437}
        height={715}
      /> 
    </div>
  );
};

export default Custom404;
