import React from "react";
import styles from "./styles.module.scss";

export default function LocationContainer() {
  return (
    <div className={styles.wrapper}>
      <h1>Məkanlar</h1>
      <p className={styles.subtitle}>
        Mövcud məkanları idarə edə və ya yeni əlavə edə bilərsiniz.
      </p>

      <div className={styles.controls}>
        <div className={styles.search}>
          <input type="text" placeholder="Məkan axtar" />
        </div>

        <select className={styles.select}>
          <option>Bütün</option>
          <option>Aktiv</option>
          <option>Passiv</option>
        </select>

        <button className={styles.addButton}>
          Məkan əlavə et
        </button>
      </div>

      <div className={styles.tableHeader}>
        <span>Məkan</span>
        <span>Ünvan</span>
        <span>Status</span>
        <span>Redaktə</span>
      </div>

      {[1, 2, 3].map((item, i) => (
        <div key={i} className={styles.row}>
          <span>Zeyd Kabab</span>
          <span>Bakı, Tabriz küç, 20B</span>
          <span>Aktiv</span>
          <button className={styles.moreButton}>
            {/* icon ilə də istifadə edə bilərsiniz */}...
          </button>
        </div>
      ))}
    </div>
  );
}
