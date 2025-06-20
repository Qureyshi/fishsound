'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
 
 

const genres = [
  '50\'lər', '60\'lar', '70\'lər', '80\'lər', '90\'lar',
  '00\'lar', 'Ən son', 'Akustik', 'Klassik', 'Ölkə',
  'Rəqs', 'Elektron', 'Ambians', 'Folk', 'Hip Hop',
  'House', 'Indie', 'Caz', 'K-pop', 'Uşaqlar üçün',
  'Salon', 'Meyinistrım', 'Pop', 'R&B', 'Reggi',
  'Rock', 'Soul'
];

type Props = {
  onNext: () => void;
}

export default function GenreSelector({ onNext }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelected((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className={styles.container}>
      <h2>Sevdiyiniz janrı seçin</h2>
      <input
        type="text"
        placeholder="Daha detallı seçim etmək istəyirəm!"
        className={styles.input}
         
      />
      <p>Birini və ya bir neçəsini seçin</p>
      <div className={styles.separator}>
        <span>Və ya</span>
      </div>
      <div className={styles.grid}>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`${styles.genreButton} ${selected.includes(genre) ? styles.active : ''}`}
            onClick={() => toggleGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <button className={styles.submit}  onClick={onNext}>Digər seçimləri Fish Sound etsin!</button>
    </div>
  );
}
