import React from 'react';
import styles from './styles.module.scss';
import PageHeader from '@/components/common/pageheader';
import Footer from '@/components/common/footer';

export default function ContactContainer() {
  return (
    <>
      <div className="body_container">
        
        <PageHeader title="Əlaqə" />
        
        <div className={`${styles.header} m_b m_t`}>Bizimlə əlaqə saxlamağınız üçün</div>
        
        <div className={styles.contactCard}>
          <div className={styles.contactContent}>
            <div className={styles.sectionTitle}>Ünvan</div>
            <div className={styles.addressText}>
              Bakı 1065, Cəfər Cabbarlı küçəsi 44
            </div>
            <div className={styles.applicationTitle}>Müraciət</div>
            <div className={styles.contactInfo}>
              contact@fishsound.com<br />
              +994 55 442 16 42
            </div>
          </div>
        </div>

        <div className={`${styles.header} m_b m_t`}>Bizim sizinlə əlaqə saxlamağımız üçün</div>
        
        <form className={styles.contactForm}>
          <div className={styles.contactForm__column}>
            <div className={styles.contactForm__field}>
              <label className={styles.inputLabel}>Ad</label>
              <input className={styles.input} type="text" placeholder="Mustafa" />
            </div>
            
            <div className={styles.contactForm__field}>
              <label className={styles.inputLabel}>E-poçt</label>
              <input className={styles.input} type="email" placeholder="user@example.com" />
            </div>
            
            <div className={styles.contactForm__field}>
              <label className={styles.inputLabel}>Tarix</label>
              <input className={styles.input} type="text" placeholder="01/01/2025" />
            </div>
          </div>
          
          <div className={styles.contactForm__column}>
            <div className={styles.contactForm__field}>
              <label className={styles.inputLabel}>Soyad</label>
              <input className={styles.input} type="text" placeholder="Ahmadov" />
            </div>

            <div className={styles.contactForm__field}>
              <label className={styles.inputLabel}>Əlaqə nömrəsi</label>
              <input className={styles.input} type="text" placeholder="+994 xx xxx xx xx" />
            </div>

            <button type="submit" className={styles.submitButton}>
              Təsdiq et
            </button>
          </div>
        </form>
      
      </div>
      <Footer />
    </>
  );
}
