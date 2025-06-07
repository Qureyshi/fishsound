
import React from 'react';
import styles from './styles.module.scss';

type PricingCardProps = {
  title: string;
  features: string[];
  price: string;
};

export default function PricingCard({ title, features, price }: PricingCardProps) {
  return (
     <div className={styles["card"]}>
        <div className={styles["card_data"]}>
          <div className={styles["title"]}><h2>{title}</h2></div>
          <div className={styles["feature-list"]}>
            {features.map((feature, idx) => (
              <div className={styles["list_element"]} key={idx}>{feature}</div>
            ))}
          </div>
        </div>
        <div className={styles["price_btn"]}>
          <div className={styles["xx-azn"]}>{price}</div>
        </div>
      </div>

    
  );
}
