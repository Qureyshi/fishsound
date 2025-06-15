import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function RegistrationPrompt() {
  return (
    <div className={styles.registration}>
      <div className={styles.header}>
        <div className={styles.title}>Pulsuz qeydiyyatdan keç!</div>
        <div className={styles.subtitle}>Elə bu gündən 7 günlük sınağa başla</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}><Link className={styles.lnk}  href="/register">E-posta ilə davam et</Link>  </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>Google ilə davam et</div>
      </div>
      <div className={styles.loginPrompt}>
        <span>
          <span className={styles.loginQuestion}>Hesabın var?</span>{' '}
          <Link className={styles.loginLink}  href="/login">Daxil ol</Link>  
        </span>
      </div>
    </div>
  );
}
