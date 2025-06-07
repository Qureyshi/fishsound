import React from 'react';
import styles from './styles.module.scss';
import Navbar from '@/components/common/navbar';
import PageHeader from '@/components/common/pageheader';
import PricingCard from '@/components/common/pricingcard';
import Footer from '@/components/common/footer';


export default function PricingContainer() {
  return (
    <>
      <Navbar/>
      <PageHeader title="Qiymət" /> 
      

      <div className={styles["pricing_cards"]}>
        <div className={styles["card"]}>
        <PricingCard
          title="Standart"
          features={[
            '3 musiqi janrı seçimi',
            '3 pleylist yaratma',
            '2 stansiya yaratma',
            '1 cihaz seçimi',
          ]}
          price="XX AZN"
        />
        </div>
        <div className={styles["card"]}>
        <PricingCard
          title="Standart"
          features={[
            '3 musiqi janrı seçimi',
            '3 pleylist yaratma',
            '2 stansiya yaratma',
            '1 cihaz seçimi',
          ]}
          price="XX AZN"
        />
        </div>
        <div className={styles["card"]}>
        <PricingCard
          title="Standart"
          features={[
            '3 musiqi janrı seçimi',
            '3 pleylist yaratma',
            '2 stansiya yaratma',
            '1 cihaz seçimi',
          ]}
          price="XX AZN"
        />
        </div>
      </div>
      
   

    
      <Footer/>









    </>
  );
}
