'use client';
import React from 'react';
import styles from './styles.module.scss';

 

export default function SpotifyIntegration() {
  return (
    <div className={styles.container}>
      <h2>
        <span className={styles.spotify}>Spotify</span> inteqrasiya et
      </h2>
      <p className={styles.description}>
        Mövcud pleylistlərinizi Fish Sound-a gətirin və onları biznesinizdə qanuni şəkildə səsləndirin
      </p>
      <div className={styles.buttons}>
        <button className={styles.connect}>Spotify-a qoşul</button>
        <button className={styles.skip}>Bu mərhələni keç</button>
      </div>
    </div>
  );
}
