import React from 'react';
import styles from './styles.module.scss';

type PricingCardProps = {
  title: string;
  features: string[];
  price: string;
  planType?: 'monthly' | 'yearly';
  discountLabel?: string;
};

export default function PricingCard({
  title,
  features,
  price,
  planType = 'monthly',
  discountLabel,
}: PricingCardProps) {
  return (
    <div className={styles.card}>
      {/* Show discount badge if plan is yearly */}
      {planType === 'yearly' && discountLabel && (
  <div className={styles.discountBadge}>{discountLabel}</div>
)}
      <div className={styles.card_data}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles["feature-list"]}>
          {features.map((feature, idx) => (
            <div className={styles.list_element} key={idx}>
              {feature}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${styles.price_btn} ${
          planType === 'yearly' ? styles.purple : ''
        }`}
      >
        <div className={styles["xx-azn"]}>{price}</div>
      </div>
    </div>
  );
}
