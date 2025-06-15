import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <>

         <div  className={styles["footer_container"]}>
            <div className="body_container">
            <div  className={styles["footer"]}>
            <div className={styles["footer-text"]}>
              <h3 className={styles["section-title"]}>Saytın xəritəsi</h3>
              <div className={styles["link"]}>Ana səhifə</div>
              <div className={styles["link"]}>Necə işləyir?</div>
              <div className={styles["link"]}>Biznes tipləri</div>
              <div className={styles["link"]}>Qiymət</div>
              <div className={styles["link"]}>Əlaqə</div>
            </div>
          
            <div className={styles["sosial-media-block"]}>
              <h3 className={styles["section-title"]}>Sosial media</h3>
              <div className={styles["link"]}>Instagram</div>
              <div className={styles["link"]}>Facebook</div>
            </div>
          
            <div className={styles["abun-card"]}>
              <h3 className={styles["subscribe-text"]}>
                Yeniliklərimizdən xəbərdar olmaq üçün abunə olun
              </h3>
              <div className={styles["input-button-wrapper"]}>
                <input
                  type="email"
                  placeholder="user@example.com"
                  className={styles["email-input"]}
                />
                <button className={styles["abun-ol-button"]}>Abunə ol</button>
              </div>
              <div className={styles["checkbox-agree"]}>
                  <label className={styles.accept}
                    
                  >
                    <input  type="checkbox" className={styles.checkbox} required />
                    Qaydalar və şərtlərlə razıyam
                  </label>
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


            </div>
           
        </div>
        
    </>
  )
}
