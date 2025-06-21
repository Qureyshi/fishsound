"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

interface Props {
  songs: Song[];
  onClose: () => void;
  onConfirm: (selectedIds: number[]) => void;
}

const AddSongModal: React.FC<Props> = ({ songs, onClose, onConfirm }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === songs.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(songs.map((s) => s.id));
    }
  };

  const handleConfirm = () => {
    onConfirm(selectedIds);
    onClose();
  };

  const isAllSelected = selectedIds.length === songs.length;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.scrollWrapper}>
          <div className={styles.header}>
            <span></span>
            <span>Mahnı adı</span>
            <span>İfaçı</span>
            <span>Albom</span>
            <span>Dəqiqə</span>
          </div>

          <div className={styles.list}>
            {songs.map((song, idx) => (
              <div
                key={song.id}
                className={`${styles.row} ${
                  selectedIds.includes(song.id) ? styles.selected : ""
                }`}
                onClick={() => toggleSelect(song.id)}
              >
                <span className={styles.index}>{idx + 1}</span>
                <div className={styles.card}>
                  <img
                    src={song.cover}
                    alt={song.title}
                    className={styles.cover}
                  />
                  <span className={styles.title}>{song.title}</span>
                  <span className={styles.artist}>{song.artist}</span>
                  <span className={styles.album}>{song.album}</span>
                  <span className={styles.duration}>{song.duration}</span>
                  <span className={styles.dots}>...</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.selectAllRow}>
          <label className={styles.selectAll}>
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={toggleSelectAll}
            />
            Hamısını seç
          </label>
        </div>

        <div className={styles.footer}>
          <button className={styles.confirmBtn} onClick={handleConfirm}>
            Təsdiqə
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSongModal;
