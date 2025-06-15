import React, { useState } from 'react';
import styles from './styles.module.scss';

type Props = {
  onNext: () => void;
};

const BusinessInfoForm = ({ onNext }: Props) => {
  const [locationCount, setLocationCount] = useState('');
  const [musicProvider, setMusicProvider] = useState('');

  return (
    <div className={styles.container}>
      <h1>Bizə bir az daha ətraflı məlumat verin</h1>
      <p>Bu, tez quruluma kömək edəcək</p>

      <div className={styles.formGroup}>
        <label>Biznesinizin neçə yeri var?</label>
        <select
          value={locationCount}
          onChange={(e) => setLocationCount(e.target.value)}
          className={styles.select}
        >
          <option value="">Yerin sayı</option>
          <option value="1">1</option>
          <option value="2-5">2-5</option>
          <option value="6-10">6-10</option>
          <option value="10+">10+</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Hazırda hansı xidmətdən istifadə edirsiniz</label>
        <select
          value={musicProvider}
          onChange={(e) => setMusicProvider(e.target.value)}
          className={styles.select}
        >
          <option value="">Musiqi provayderinizi seçin</option>
          <option value="spotify">Spotify</option>
          <option value="appleMusic">Apple Music</option>
          <option value="youtubeMusic">YouTube Music</option>
          <option value="other">Digər</option>
        </select>
      </div>

      <button className={styles.continueBtn} onClick={onNext}>Davam et</button>
    </div>
  );
};

export default BusinessInfoForm;
