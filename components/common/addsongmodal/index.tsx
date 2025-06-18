"use client";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  onClose: () => void;
}

const AddSongModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Yeni Mahnı Əlavə Et</h2>

        {/* Burada form və ya inputlar ola bilər */}
        <div className={styles.content}>
          <p>playlist</p>
        </div>

        <button className={styles.closeBtn} onClick={onClose}>
          Bağla
        </button>
      </div>
    </div>
  );
};

export default AddSongModal;
