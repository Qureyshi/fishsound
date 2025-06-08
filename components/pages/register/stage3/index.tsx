import React from 'react';
import styles from './styles.module.scss';
  

const AiPlaylistForm = () => {
  return (
    <div className={styles.container}>
      <h1>
        İstəsəniz <strong>Fish Sound</strong>-un süni intellekt dəstəyi sizin üçün uyğun olan pleylisti yarada bilər!
      </h1>
      <p>Zəhmət olmasa biznesiniz və hansı tərzdə musiqilər istədiyiniz haqqında məlumat verin.</p>

      <input
        type="text"
        className={styles.input}
        placeholder="Məsələn: Coffeeshop işlədirem və lo-fi tərzdə musiqilər sevirəm olmasını istəyirəm"
      />

      <div className={styles.buttons}>
        <button className={styles.createBtn}>Süni intellektlə pleylistləri yarat!</button>
        <button className={styles.manualBtn}>Özüm yaratmaq istəyirəm!</button>
      </div>
    </div>
  );
};

export default AiPlaylistForm;
