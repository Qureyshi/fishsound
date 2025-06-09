import React from 'react';
import styles from './styles.module.scss';
import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import PageHeader from '@/components/common/pageheader';
import Masonry from '@/components/common/masonry';


export default function BusinessContainer() {
  return (
    <>
      <div className="body_container">
       <Navbar/>
      <PageHeader title="Biznes tipləri" /> 
      

      <div className={styles["business_features"]}>
        
        <div className={styles["feature"]}>
          <h1>Sağlamlıq və gözəllik</h1>
          <div>İdman zalları</div>
          <div>Xəstəxanalar</div>
          <div>Stomotoloji klinikalar</div>
          <div>Gözəllik salonları</div>
          <div>Bərbərlər</div>
         
          <h1>Xidmət sənayəsi</h1>
          <div>Restoranlar</div>
          <div>Koffeşoplar</div>
          <div>Otellər</div>
          <div>Bar və pablar</div>
        </div>
       
        <div className={styles["feature"]}>
          <h1>Satış məntəqələri</h1>
          <div>Mağazalar</div>
          <div>Ərzaq mağazaları</div>
          <div>Ticarət mərkəzləri</div>
          <div>Avtomobil satıcıları</div>
          
          <h1>İctimaiyyət</h1>
          <div>Ofislər</div>
          <div>Kurslar</div>
          <div>Mədəniyyət mərkəzləri</div>
        </div>
      </div>







    <Masonry/>



    <div className={styles["btn"]}  >
             <h2>
             Elə indi yoxla!
             </h2>
    </div>




     </div>
    <Footer/> 




    </>
  );
}
