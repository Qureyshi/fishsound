import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles["headers"]}>
      <Image
        className={styles["logo"]}
        src="/images/logo/logo0.svg"
        alt="Logo"
        width={100}
        height={100}
      />

      <div className={styles["frame-43"]}>
        <div className={styles["buttons"]}>
          <div className={styles["button"]}>
            <Link className={styles["link"]} href="/">Ana səhifə</Link>
          </div>
        </div>

        <div className={styles["ellipse-6"]}>
          <div className={styles["ellipse-1"]}></div>
        </div>

        <div className={styles["buttons"]}>
          <div className={styles["button"]}>
            <Link className={styles["link"]} href="/howwork">Necə işləyir</Link>
          </div>
          <div className={styles["iconamoon-profile-bold"]}>
            <Image className={styles["group"]} src="/group0.svg" alt="" width={24} height={24} />
          </div>
        </div>

        <div className={styles["ellipse-12"]}>
          <div className={styles["ellipse-1"]}></div>
        </div>

        <div className={styles["buttons"]}>
          <div className={styles["button"]}>
            <Link className={styles["link"]} href="/business">Biznes tipləri</Link>
          </div>
          <div className={styles["iconamoon-profile-bold"]}>
            <Image className={styles["group2"]} src="/group1.svg" alt="" width={24} height={24} />
          </div>
        </div>

        <div className={styles["ellipse-8"]}>
          <div className={styles["ellipse-1"]}></div>
        </div>

        <div className={styles["buttons"]}>
          <div className={styles["button"]}>
            <Link className={styles["link"]} href="/pricing">Qiymət</Link>
          </div>
          <div className={styles["iconamoon-profile-bold"]}>
            <Image className={styles["group3"]} src="/group2.svg" alt="" width={24} height={24} />
          </div>
        </div>

        <div className={styles["ellipse-9"]}>
          <div className={styles["ellipse-1"]}></div>
        </div>

        <div className={styles["buttons"]}>
          <div className={styles["button"]}>
            <Link className={styles["link"]} href="/contact">Əlaqə</Link>
          </div>
          <div className={styles["iconamoon-profile-bold"]}>
            <Image className={styles["group4"]} src="/group3.svg" alt="" width={24} height={24} />
          </div>
        </div>

        <div className={styles["ellipse-10"]}>
          <div className={styles["ellipse-1"]}></div>
        </div>

        <div className={styles["buttons"]}>
          <div className={styles["button2"]}>Daxil ol</div>
          <div className={styles["iconamoon-profile-bold"]}>
            <Image className={styles["group5"]} src="/group4.svg" alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
