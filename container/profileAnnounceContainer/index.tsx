// ProfilAnnounceContainer.tsx
"use client"
import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Create from '@/components/icons/Create';
import Search from '@/components/icons/Search';

export default function ProfilAnnounceContainer() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Anonslar</h1>
      <p className={styles.subtitle}>
        Yeni anonslar yaradın və ya mövcud anonslara düzəliş edin.
      </p>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <div className={styles.icon}>
            <Search />
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
          <option>...</option>
        </select>
        <div
          className={styles.crt_btn}
          onClick={() => setIsFirstModalOpen(true)}
        >
          <Create /> Anons əlavə et
        </div>
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
          <button className={styles.moreButton}>...</button>
        </div>
      ))}

      {isFirstModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setIsFirstModalOpen(false)}>
              ×
            </button>
            <div
              className={styles.dropZone}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <div className={styles.iconLarge}>⬆️</div>
              <p>Drag and Drop here</p>
              <span>or</span>
              <label className={styles.selectFileBtn}>
                Select file
                <input type="file" hidden onChange={handleFileSelect} />
              </label>
              <button className={styles.aiButton}>Süni intellekt ilə səsləndir</button>
            </div>
          </div>
        </div>
      )}

      {isSecondModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setIsSecondModalOpen(false)}>
              ×
            </button>
            <textarea placeholder="Səsləndirmək istədiyiniz anonsu daxil edin"></textarea>
            <button className={styles.confirmBtn} onClick={() => setIsSecondModalOpen(false)}>
              Təsdiqə
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
