import React from 'react';
import styles from './styles.module.scss';

export default function RegistrationPrompt() {
  return (
    <div className={styles.registration}>
      <div className={styles.header}>
        <div className={styles.title}>Pulsuz qeydiyyatdan keç!</div>
        <div className={styles.subtitle}>Elə bu gündən 7 günlük sınağa başla</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>E-posta ilə davam et</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>Google ilə davam et</div>
      </div>
      <div className={styles.loginPrompt}>
        <span>
          <span className={styles.loginQuestion}>Hesabın var?</span>{' '}
          <span className={styles.loginLink}>Daxil ol</span>
        </span>
      </div>
    </div>
  );
}
