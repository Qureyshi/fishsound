"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Item {
  id: number;
  place: string;
  address: string;
}

interface Props {
  items: Item[];
  onClose: () => void;
  onConfirm: (selectedIds: number[]) => void;
}

const LocationModal: React.FC<Props> = ({ items, onClose, onConfirm }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === items.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(items.map((item) => item.id));
    }
  };

  const isAllSelected = selectedIds.length === items.length;

  const handleConfirm = () => {
    onConfirm(selectedIds); // validasiya və ötürmə
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.topRow}>
          <label className={styles.selectAll}>
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={toggleSelectAll}
            />
            Hamısını seç
          </label>

          <div className={styles.header}>
            <span>Məkan</span>
            <span>Ünvan</span>
          </div>
        </div>

        <div className={styles.list}>
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`${styles.row} ${
                selectedIds.includes(item.id) ? styles.selected : ""
              }`}
              onClick={() => toggleSelect(item.id)}
            >
              <span className={styles.index}>{idx + 1}</span>
              <div className={styles.card}>
                <div className={styles.place}>{item.place}</div>
                <div className={styles.address}>{item.address}</div>
              </div>
            </div>
          ))}
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

export default LocationModal;
