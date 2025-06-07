import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Masonry() {
  return (
    <>

      <div className={styles["masonry-grid"]}  >
        <div className={styles["item"]}>
          <Image
          className={styles["image"]} 
          src="/images/masonry/rectangle-30.png"
          alt="Logo"
          width={600}
          height={90}
          /> 
      </div>
      <div className={styles["item"]}>
          <Image
          className={styles["image"]} 
          src="/images/masonry/rectangle-90.png"
          alt="Logo"
          width={406}
          height={433}
          /> 
      </div>
      <div className={styles["item"]}>
          <Image
          className={styles["image"]} 
          src="/images/masonry/rectangle-60.png"
          alt="Logo"
          width={406}
          height={433}
          /> 
      </div>
      <div className={styles["item"]}>
          <Image
          className={styles["image"]} 
          src="/images/masonry/rectangle-70.png"
          alt="Logo"
          width={406}
          height={433}
          /> 
      </div>
      
      <div className={styles["item"]}>
          <Image
          className={styles["image"]} 
          src="/images/masonry/rectangle-100.png"
          alt="Logo"
          width={406}
          height={433}
          /> 
      </div>
      <div className={styles["item"]}>
          <Image
          className={styles["image"]} 
          src="/images/masonry/rectangle-80.png"
          alt="Logo"
          width={406}
          height={433}
          /> 
      </div>
      <div className={styles["item"]}>
          <Image
          className={styles["image"]} 
          src="/images/masonry/rectangle-110.png"
          alt="Logo"
          width={406}
          height={433}
          /> 
      </div>
       
 
      </div>

 

    </>
  )
}
