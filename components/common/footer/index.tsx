import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
         <div  className={styles["footer"]}>
 
 
            <div className={styles["footer-text"]}>
              <div className={styles["section-title"]}>Saytın xəritəsi</div>
              <div className={styles["link"]}>Ana səhifə</div>
              <div className={styles["link"]}>Necə işləyir?</div>
              <div className={styles["link"]}>Biznes tipləri</div>
              <div className={styles["link"]}>Qiymət</div>
              <div className={styles["link"]}>Əlaqə</div>
            </div>
          
            <div className={styles["sosial-media-block"]}>
              <div className={styles["section-title"]}>Sosial media</div>
              <div className={styles["link"]}>Instagram</div>
              <div className={styles["link"]}>Facebook</div>
            </div>
          
            <div className={styles["abun-card"]}>
              <div className={styles["subscribe-text"]}>
                Yeniliklərimizdən xəbərdar olmaq üçün abunə olun
              </div>
              <div className={styles["button-wrapper"]}>
                <div className={styles["input-placeholder"]}>user@example.com</div>
                <div className={styles["abun-ol-button"]}>
                  <div className={styles["abun-ol"]}>Abunə ol</div>
                </div>
              </div>
              <div className={styles["checkbox-agree"]}>
                <img className={styles["checkbox-icon"]} src="frame-440.svg" alt="" />
                <div className={styles["checkbox-label"]}>Qaydalar və şərtlərlə razıyam</div>
              </div>
            </div>

             <Image
                    className={styles["logo"]}
                    src="/images/logo/logo0.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
          
            
           
        </div>
        <div className={styles["copyright"]}>
              Fish Sound 2025. Bütün hüquqlar qorunur.
            </div>

    </>
  )
}
