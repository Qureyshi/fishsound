'use client';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

//import { FaArrowRight } from 'react-icons/fa';


type Props = {
  onNext: () => void;
}

export default function PlaylistNotification({ onNext }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>
          Seçimləriniz əsasında müəssisənizə <span className={styles.highlight}>XXXX</span> pleylist uyğunlaşdırdıq. Onlar indi musiqi kitabxananızdadır!
        </p>
        <div  className={styles.Btn}>
        <button className={styles.nextBtn}  onClick={onNext}>
          Növbəti <Image
                    className={styles["logo"]}
                    src="/images/arrowright.svg"
                    alt="Logo"
                    width={50}
                    height={10}
                  />
        </button>
        </div>
      </div>
    </div>
  );
}
