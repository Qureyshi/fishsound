import React from 'react';
import styles from './styles.module.scss';
import Navbar from '@/components/common/navbar';
import PageHeader from '@/components/common/pageheader';
import PricingCard from '@/components/common/pricingcard';


export default function ContactContainer() {
  return (
    <>
      <Navbar/>
      <PageHeader title="Əlaqə" /> 
      
      <div className={styles["contactCard"]}>
  <div className={styles["contactContent"]}>
    <div className={styles["sectionTitle"]}>Ünvan</div>
    <div className={styles["addressText"]}>
      Bakı 1065, Cəfər Cabbarlı küçəsi 44
    </div>
    <div className={styles["applicationTitle"]}>Müraciət</div>
    <div className={styles["contactInfo"]}>
      contact@fishsound.com<br />
      +994 55 442 16 42
    </div>
  </div>
</div>





 <div className={styles["contactForm"]}>
      <div className={styles["contactForm__column"]}>
        <div className={styles["contactForm__field"]}>
          <div className={styles["inputContainer"]}>
            <div className={styles["inputText"]}>Mustafa</div>
          </div>
          <div className={styles["inputLabel"]}>Ad</div>
        </div>

        <div className={styles["contactForm__field"]}>
          <div className={styles["inputContainer"]}>
            <div className={styles["inputText"]}>user@example.com</div>
          </div>
          <div className={styles["inputLabel"]}>E-poçt</div>
        </div>

        <div className={styles["contactForm__field"]}>
          <div className={styles["inputContainer"]}>
            <div className={styles["inputText"]}>buttontext</div>
          </div>
          <div className={styles["inputLabel"]}>Tarix</div>
        </div>
      </div>

      <div className={styles["contactForm__column"]}>
        <div className={styles["contactForm__field"]}>
          <div className={styles["inputContainer"]}>
            <div className={styles["inputText"]}>Ahmadov</div>
            <img
              className={styles["inputIcon"]}
              src="mdi-eye0.svg"
              alt="Show"
            />
          </div>
          <div className={styles["inputLabel"]}>Soyad</div>
        </div>

        <div className={`${styles["contactForm__field"]} ${styles["contactForm__field--stacked"]}`}>
          <div className={styles["inputContainer"]}>
            <div className={styles["inputText"]}>+994 xx xxx xx xx</div>
          </div>
          <div className={styles["inputLabel"]}>Əlaqə nömrəsi</div>
          <div className={styles["submitButton"]}>
            <div className={styles["submitButton__text"]}>Təsdiq et</div>
          </div>
        </div>
      </div>
    </div>













    </>
  );
}
