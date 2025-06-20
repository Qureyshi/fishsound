"use client"
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Google from '@/components/icons/Google';
import Eye from '@/components/icons/Eye';
import EyeClose from '@/components/icons/EyeClose';

export default function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="body_container">
        <div className={styles.container}>
        <h2 className={styles.title}>Fish Sound hesabına daxil ol</h2>
        <form className={styles.form}>
          <input type="email" placeholder="E-posta" className={styles.input} />
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Şifrə"
              className={styles.input}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword);
              }}
              aria-label={showPassword ? 'Şifrəni gizlət' : 'Şifrəni göstər'}
            >
              {showPassword ?  <Eye color="white"/> : <EyeClose color="white"/>}
            </span>
          </div>
          <a href="#" className={styles.forgot}>Şifrəni unutmuşan?</a>
          <button type="submit" className={styles.loginButton}>Daxil ol</button>
          <button type="button" className={styles.googleButton}>
            <Google />
            Google hesabın ilə daxil ol
          </button>
        </form>
      </div>
      
      </div>
   
    </>
  );
}
