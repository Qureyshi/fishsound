import React from 'react';
import styles from './styles.module.scss';

type Props = {
  onNext: () => void;
};

const WelcomeStep = ({ onNext }: Props) => {
  return (
    <div className={styles.card}>
      <h1>
        Gəlin <span className={styles.highlight}>başlayaq!</span>
      </h1>
      <p>
        Sınaqdan maksimum yararlanmağınıza kömək etmək istərdik. Musiqi təcrübənizə başlamaq üçün bəzi sürətli addımları tamamlayın.
      </p>

      <div className={styles.buttonGroup}>
        <div>
          <button className={styles.skipBtn}>
            Bu addımı keç
          </button>
        </div>
        <div>
          <button className={styles.startBtn} onClick={onNext}>
            Başlayaq!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStep;
