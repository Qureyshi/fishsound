import React from 'react';
import styles from './styles.module.scss';
import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import Masonry from '@/components/common/masonry';
import Image from 'next/image';

export default function HomeContainer() {
  return (
    <>
      <Navbar/>

  <div className={styles["header_container"]}>
    <div className={styles["home_header"]}>
        
          <span className={styles["span1"]}>Biz </span>
          <span className={styles["span2"]}>Fish Sound </span>
          <span className={styles["span1"]}>olaraq sizin müəssisələrinizə </span>
          <span className={styles["span2"]}>fon musiqisi xidməti </span>
          <span className={styles["span1"]}>təklif edirik!</span>
        

      </div>
    </div>

    <h2>Hər müəssiyə uyğun</h2>

      <Masonry />


    <h2>Playlist seçənəkləri</h2>
    <div>
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

      <h2>Xüsusi stansiyalar ilə pleylist qurmağınıza ehtiyyac qalmasın</h2>
      <p> Xüsusi stansiyalardan istifadə edərək seçdiyiniz janrın kanalına daxil ola və
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

      <h2>Hər musiqi janrını tapa bilərsiniz</h2>
      <p>FM xüsusiyyətindən istifadə edərək seçdiyiniz janrın kanalına daxil ola və hər
  gün dəyişən musiqilər dinləyən bilərsiniz</p>



      <div className={styles["category_container"]}>
        <div className={styles["category_flexbox"]}>
           <div>
              <div>🎸 Rock</div>
              <div>🎤 Pop</div>
              <div>🎧 Electronic</div>
              <div>🎷 Jazz</div>
              <div>🎼 Classical</div>
            </div>
            <div>
              <div>🎹 Blues</div>
              <div>🎺 Funk</div>
              <div>🎶 Soul</div>
              <div>🎚️ Hip-Hop</div>
              <div>🔊 Reggae</div>
            </div>
            <div>
              <div>🎻 Folk</div>
              <div>🌌 Ambient</div>
              <div>🕺 Disco</div>
              <div>🎮 Chiptune</div>
              <div>🔥 Metal</div>
            </div>
            <div>
              <div>💿 Techno</div>
              <div>☁️ Lo-fi</div>
              <div>💀 Gothic</div>
              <div>🚗 Trap</div>
              <div>🔉 House</div>
            </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
