import React from 'react';
import styles from './styles.module.scss';
import Footer from '@/components/common/footer';
import Masonry from '@/components/common/masonry';
import Image from 'next/image';

export default function HomeContainer() {
  return (
    <>
    <div className="body_container">
     

  <div className={styles["header_container"]}>
    <div className={styles["home_header"]}>
        <h2>
          <span className={styles["span"]}>Biz </span>
          <span className={styles["span2"]}>Fish Sound </span>
          <span className={styles["span1"]}>olaraq sizin </span>
          <span className={styles["span1"]}>müəssisələrinizə </span>
          <span className={styles["span2"]}>fon musiqisi xidməti </span>
          <span className={styles["span1"]}>təklif edirik!</span>
        </h2>

      </div>
    </div>

    <h2 className='m_b fs_42'>Hər müəssisəyə uyğun</h2>

      <Masonry />


    <h2 className='m_t m_b fs_42'>Playlist seçənəkləri</h2>
    <div className='m_b fs_32'>
      1500 dən çox hazır pleylistdən istifadə edin və ya öz pleylistinizi yaradın
      <br />
      <br />
      Süni intellekt dəstəyi ilə özünüzə məxsus pleylistlərin janrlarını siz seçin o
      yaratsın!
    </div>


    <div  className={styles["playlist_covers_1"]}>
      <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
       </div>  
      <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
       </div> <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
       </div> 
       <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
       </div> 
       <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
       </div> 
    </div>
     <div  className={styles["playlist_covers_2"]}>
      <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
      </div>
      <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
      </div>
      <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
      </div>
      <div>
        <Image
          className={styles["image"]} 
          src="/images/cover.png"
          alt="Logo"
          width={400}
          height={400}
          /> 
      </div>
    </div>

      <h2 className='m_t m_b fs_42'>Xüsusi stansiyalar ilə pleylist qurmağınıza ehtiyyac qalmasın</h2>
      <p className='m_b fs_32'> Xüsusi stansiyalardan istifadə edərək seçdiyiniz janrın kanalına daxil ola və
  hər gün dəyişən musiqilər dinləyən bilərsiniz</p>


      <div  className={styles["flex_center"]}>
          <Image
          className={styles["wave_image"]} 
          src="/images/logo/wave.png"
          alt="Logo"
          width={610}
          height={357}
          /> 
      </div>

      <h1 className='m_t m_b'>Hər musiqi janrını tapa bilərsiniz</h1>
      <p className='m_b fs_32'>FM xüsusiyyətindən istifadə edərək seçdiyiniz janrın kanalına daxil ola və hər  gün dəyişən musiqilər dinləyən bilərsiniz</p>



 
      <div>
        <Image
          className={styles["wave_image"]} 
          src="/images/logo/tags.png"
          alt="Logo"
          width={1240}
          height={328}
          style=  {{
          maxWidth: '100%',
            height: 'auto',
          }}
          /> 
      </div>
       
    </div>
    <Footer/>

    </>
  );
}
