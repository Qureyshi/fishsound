import React from 'react';
import styles from "./styles.module.scss";
import Create from '@/components/icons/Create';
import Search from '@/components/icons/Search';
//import { FiSearch, FiPlus, FiMoreHorizontal } from 'react-icons/fi';

export default function ProfilAnnounceContainer() {
  return (
    <div className={styles.wrapper}>
      <h1>Anonslar</h1>
      <p className={styles.subtitle}>
        Yeni anonslar yaradın və ya mövcud anonslara düzəliş edin.
      </p>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <div className={styles.icon}>
          <Search/>
          </div>
          <input
            type="text"
            placeholder="Məkan axtar"
            className={styles.input}
          />
        </div>
        <select className={styles.select}>
          <option>Status</option>
          <option>Aktiv</option>
          <option>....</option>
        </select>
        <div className={styles.crt_btn}><Create/>Anons əlavə et</div>
      </div>

      <div className={styles.tableHeader}>
        <span>Anonsun adı</span>
        <span>Dinlə</span>
        <span>Neçə dəqiqədir</span>
      </div>

      {[1, 2].map((_, i) => (
        <div key={i} className={styles.row}>
          <span>Anons №{i + 1}</span>
          <audio controls className={styles.audioPlayer}>
            <source src="https://www.orangefreesounds.com/wp-content/uploads/2016/07/Piano-Concerto-No.23-In-A-Major-K-488-Adagio.mp3" type="audio/mpeg" />
            Sizin brauzeriniz audio elementini dəstəkləmir.
          </audio>
          <span>1:23</span>
          <button className={styles.moreButton}> ... </button>
        </div>
      ))}
    </div>
  );
}
