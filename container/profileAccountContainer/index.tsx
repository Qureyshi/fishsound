import React from "react";
import styles from "./styles.module.scss";

export default function ProfilAccountContainer() {
  return (
    <div className='main'>
    <div className={styles.container}>
      <section className={styles.accountSection}>
        <h2>Hesab məlumatları</h2>
        <div className={styles.grid}>
          <div>
            <label>Ad</label>
            <input type="text" placeholder="Mustafa" />
          </div>
          <div>
            <label>E-poçt</label>
            <input type="email" placeholder="forexamplemail@gmail.com"/>
          </div>
          <div>
            <label>Soyad</label>
            <input type="text" placeholder="Əhmədov"  />
          </div>
          <div>
            <label>Müəssisənin adı</label>
            <input type="text" placeholder="Zeyd kabab evi"  />
          </div>
        </div>
        <div  className={styles.correct}>
        <a href="#" className={styles.editLink}>
          düzəliş et
        </a>
        </div>
      </section>

      <section className={styles.subscriptionSection}>
        <h2>Abunəlik</h2>
        <div className={styles.card}>
          <p>
            <strong>Plan:</strong> Premium
          </p>
          <p>
            <strong>Bitmə tarixi:</strong> 05.08.2004
          </p>
          <p>
            <strong>Avtomatik yenilə:</strong> Bəli
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary}>
              Planı dəyiş
            </button>
            <button className={styles.secondary}>
              Abunəliyi ləğv et
            </button>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
