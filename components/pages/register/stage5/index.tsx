'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
 

const tags = [
  "Dəbdəbəli", "Hippi", "Ənənəvi", "Müasir", "Kobud", "Xoşbəxt", "Ciddi", "Oynaq",
  "Gənc", "Sakit", "Romantik", "Kişiyə xas", "Qadına xas", "Nostalji", "Random",
  "Orijinal", "Kəşf etməli", "Eksantrik", "Yüksək səsli", "Enerjili"
];

export default function OfficeMoodSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className={styles.container}>
      <h1>
        Ən yaxşı pleylistləri tapmaq üçün ofisinizin atmosferomo bizə bildirin.
      </h1>
      <p>Birini və ya bir neçəsini seçin</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${styles.tag} ${selected.includes(tag) ? styles.selected : ""}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.actions}>
        <button className={styles.generateBtn}>Digər seçimləri Fish Sound etsin!</button>
        <button className={styles.detailBtn}>Daha detallı seçim etmək istəyirəm!</button>
      </div>
    </div>
  );
}
