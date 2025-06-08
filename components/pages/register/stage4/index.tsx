'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';

const workplaceOptions = [
  'Ofis',
  'Anbar',
  'Nəqliyyat',
  'İstehsalat',
  'Tikinti',
  'Tikinti',
  'Şəxsi gigiyena və sosial xidmətlərinti',
];

const WorkplaceSelector = () => {
  const [selected, setSelected] = useState<string | null>('Ofis');

  return (
    <div className={styles.container}>
      <h1>
        Mükəmməl pleylistlərinizi tapmaqda bizə kömək edin. <br />
        İş yerinizin növünü seçin.
      </h1>
      <p>Birini seçin:</p>

      <div className={styles.options}>
        {workplaceOptions.map((label, idx) => (
          <button
            key={idx}
            className={`${styles.option} ${
              selected === label ? styles.selected : ''
            }`}
            onClick={() => setSelected(label)}
          >
            {label}
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
};

export default WorkplaceSelector;
