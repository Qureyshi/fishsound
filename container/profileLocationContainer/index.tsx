import React from "react";
import styles from "./styles.module.scss";
import Search from "@/components/icons/Search";
import Create from "@/components/icons/Create";

export default function LocationContainer() {
  return (
    <div className={styles.wrapper}>
      <h1>Məkanlar</h1>
      <p className={styles.subtitle}>
       Zonalarınızı, yerlərinizi və oxunan musiqiləri idarə edin.
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
          <option>Şəhər</option>
          <option>Baki</option>
          <option>Seki</option>
        </select>

        <select className={styles.select}>
          <option>Məkan</option>
          <option>Baki</option>
          <option>Seki</option>
        </select>

        <div className={styles.crt_btn}><Create/>Məkan əlavə et</div>
      </div>

      <div className={styles.tableHeader}>
        <span>Məkan</span>
        <span>Ünvan</span>
        <span>Status</span>
        <span>Hansi mahni oxunur</span>
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
