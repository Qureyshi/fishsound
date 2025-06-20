import React from 'react';
import styles from './styles.module.scss';
import PageHeader from '@/components/common/pageheader';
import PricingCard from '@/components/common/pricingcard';
import Footer from '@/components/common/footer';

export default function PricingContainer() {
  return (
    <>
      <div className="body_container">
        <PageHeader title="Qiymət" />

        <div className={styles.monthly}>Aylıq</div>
        <div className={styles.pricing_cards}>
          <div className={styles.card}>
            <PricingCard
              title="Standart"
              features={[
                '3 musiqi janrı seçimi',
                '3 pleylist yaratma',
                '2 stansiya yaratma',
                '1 cihaz seçimi',
              ]}
              price="XX AZN"
              planType="monthly"
            />
          </div>
          <div className={styles.card}>
            <PricingCard
              title="Standart"
              features={[
                '3 musiqi janrı seçimi',
                '3 pleylist yaratma',
                '2 stansiya yaratma',
                '1 cihaz seçimi',
              ]}
              price="XX AZN"
              planType="monthly"
            />
          </div>
          <div className={styles.card}>
            <PricingCard
              title="Standart"
              features={[
                '3 musiqi janrı seçimi',
                '3 pleylist yaratma',
                '2 stansiya yaratma',
                '1 cihaz seçimi',
              ]}
              price="XX AZN"
              planType="monthly"
            />
          </div>
        </div>

        <div className={`${styles.yearly} m_t`}>Illik</div>
        <div className={styles.pricing_cards}>
          <div className={styles.card}>
            <PricingCard
              title="Standart"
              features={[
                '3 musiqi janrı seçimi',
                '3 pleylist yaratma',
                '2 stansiya yaratma',
                '1 cihaz seçimi',
              ]}
              price="XX AZN"
              planType="yearly"
              discountLabel="20% Discount"
            />
          </div>
          <div className={styles.card}>
            <PricingCard
              title="Standart"
              features={[
                '3 musiqi janrı seçimi',
                '3 pleylist yaratma',
                '2 stansiya yaratma',
                '1 cihaz seçimi',
              ]}
              price="XX AZN"
              planType="yearly"
              discountLabel="10% Discount"
            />
          </div>
          <div className={styles.card}>
            <PricingCard
              title="Standart"
              features={[
                '3 musiqi janrı seçimi',
                '3 pleylist yaratma',
                '2 stansiya yaratma',
                '1 cihaz seçimi',
              ]}
              price="XX AZN"
              planType="yearly"
              discountLabel="50% Discount"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
