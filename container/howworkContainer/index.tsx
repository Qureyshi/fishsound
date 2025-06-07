import React from 'react';
import styles from './styles.module.scss';
import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import PageHeader from '@/components/common/pageheader';


export default function HowworkContainer() {
  return (
    <>
      <Navbar/>
      <PageHeader title="Necə işləyir?" />
      








      <h2>Necə başlamalı?</h2>
            <div className={styles["masonry-grid"]}  >
        <div className={styles["item"]}  >
          <h2>
          Sizə uyğun olan planı alın
          </h2>
          <p>
            Fish Sound-un planınıza uyğun edə biləcəyi hər şeyi 14 gün ərzində pulsuz
            təcrübədən keçirin.
          </p>
        </div>
        <div className={styles["item"]}  >
          <h2>
          İstənilən cihaza qoşulun
          </h2>
          <p>
            Səs sisteminizə WiFi, Bluetooth, AirPlay və ya kabellər vasitəsilə qoşulun.
          </p>
        </div>
        </div>



     
      <h2>Xüsusiyyətlər</h2>
      <div className={styles["masonry-grid"]}  >
        <div className={styles["item"]}  >
          <h2>
          Sıfırdan pleylistlər yaradın
          </h2>
          <p>
            İstədiyiniz sənətçinin və ya mahnının adını axtarın. Onu yeni və ya
            mövcud pleylistə əlavə edin və kataloqumuzdan yenilənmiş tövsiyələr
            siyahısından oxşar musiqilər əlavə etməklə sürəti davam etdirə
            bilərsiniz.
          </p>
        </div>
        <div className={styles["item"]}  >
          <h2>
          300+ pleylist
          </h2>
          <p>
            Mütəxəssislər tərəfindən hazırlanmış hər bir pleylist xüsusi biznes növü və ya
            musiqi janrı üçün nəzərdə tutulmuşdur. Hitlərin və az tanınan mahnıların ideal
            balansını ehtiva edir.
          </p>
        </div>
        <div className={styles["item"]}  >
          <h2>
          Xüsusi stansiyalar
          </h2>
          <p>
           Biznesinizin dəyərləri və atmosferi ətrafında bir stansiya yaradın. Əhval,
          enerji və janr etiketlərinə klikləyin və seçimlərinizə uyğun stansiya əldə
          edin.
          </p>
        </div>
         <div className={styles["item_button"]}  >
          <h2>
          Elə indi yoxla!
          </h2>
           
        </div>
        <div className={styles["item"]}  >
          <h2>
          Pleylistləri redaktə edin
          </h2>
          <p>
            Mütəxəssislərimiz tərəfindən hazırlanmış pleylistlə başlayın və üzərində
            dəyişiklik etmək üçün mahnılar əlavə edin, silin və ya yenidən sıralayın. Cəmi
            bir neçə dəqiqə ərzində onlarla saatlıq musiqi ilə fərdi pleylistiniz ola
            bilər.
          </p>
        </div>

        <div className={styles["item"]}  >
          <h2>
          Sənətçi pleylistləri
          </h2>
          <p>
            Belə asan olmamışdı! Ad yazın və həmin ifaçının və oxşar musiqilər yaradan
            başqalarının mahnılarından ibarət pleylist əldə edin.
          </p>
        </div>

        <div className={styles["item"]}  >
          <h2>
          Açıq söz filtri
          </h2>
          <p>
            Filteri aktiv edin və uyğun olmayan məzmunun atmosferi heç vaxt pozmadığından
            əmin olun.
          </p>
        </div>
        <div className={styles["item"]}  >
          <h2>
          Sadələşdirilmiş nəzarət
          </h2>
          <p>
            İşçilər səs səviyyəsini dəyişmək, yaxşı getməyən mahnını ötürmək üçün
            mürəkkəblikdən uzaq və sadələşdirilmiş veb saytımızı istənilən cihazda
            istifadə edə bilərlər.
          </p>
        </div>
       
 
      </div>

     

      <div className={styles["faq"]}  >
         <h2>FAQ</h2>
         <div className={styles["faq_row"]}>
          <div>
            <h2>Birdən çox cihazda istifadə etmək mümkündür?</h2>
            <p>
              Məntəqələri ayrı-ayrı ərazilərə bölmək olar. Bunlar bizim “cihazlar"
              dediyimiz yerlərdir. Aktivləşdirilən hər bir cihaz fərdi musiqi axınına
              imkan verəcək və hesab abunəliyindən asılı olaraq əlavə edəcəyiniz
              cihazların sayı dəyişir.
            </p>
          </div>
          <div>
            <h2>Abunəliyim birdən çox yer üçün işləyirmi?</h2>
            <p>
              İstədiyiniz qədər çox yer əlavə edin. Məkan adətən binadır və fərdi
              küçə ünvanı tələb olunur. Musiqi ifa etmək üçün hər məkanda ən azı bir
              cihaz olmalıdır.
            </p>
          </div>
        </div>

        

        <div className={styles["faq_row"]}>
          <div>
            <h2>Hesabımdan birdən çox şəxs istifadə edə bilərmi?</h2>
            <p>
              Siz şirkətiniz üçün musiqiyə daxil olmaq üçün istədiyiniz qədər
              istifadəçi dəvət edə bilərsiniz. Bunun üçün əlavə ödəniş tələb
              edilmir.
            </p>
          </div>
          <div>
            <h2>Pulsuz sınaq müddətim bitəndə nə baş verir?</h2>
            <p>
              Sınaqdan zövq aldınızsa və Fish Sound-dan istifadə etməyə davam etmək
              istəyirsinizsə, sizin üçün uyğun olan planı seçib ödəniş
              məlumatlarınızı əlavə edə bilərsiniz. Davam etmək istəmirsinizsə, heç
              bir öhdəlik, heç bir ödəniş və ediləcək bir şey yoxdur.
            </p>
          </div>
        </div>
 

        <div className={styles["faq_row"]}>
          <div>
            <h2>Sınaq müddətində abunəliyimi ləğv etsəm nə baş verir?</h2>
            <p>
              Sınaqınız tamamilə risksizdir. Ləğv etdikdən sonra, sınaq müddətinizin
              qalan hissəsi üçün xidmətdən istifadə etməyə davam edə bilərsiniz və
              bitdikdə abunə haqqı tutulmayacaq. İstənilən vaxt fikrinizi dəyişə və
              sonra abunəliyinizi yenidən aktivləşdirə bilərsiniz.
            </p>
          </div>
          <div>
            <h2>İllik ödəniş planı aylıq ödəniş tələb edir, yoxsa bir illik ödəniş?</h2>
            <p>
              Aylıq və illik olaraq abunəliklərimiz mövcuddur. İllik ödəniş etdikdə
              endirim olduğu üçün daha sərfəli paket əldə etmiş olursunuz.
            </p>
          </div>
        </div>

        

        <div className={styles["faq_row"]}>
          <div>
            <h2>Hansı ödəniş üsulları qəbul edilir?</h2>
            <p>
              Kredit / debet kartları ödənişləri bütün müştərilər üçün mövcuddur.
              Sizə uyğun olan ödəniş üsulunu seçərək ödəniş fəaliyyətini həyata
              keçirə bilər və abunəliyinizi başlada bilərsiniz.
            </p>
          </div>
          <div>
            <h2>Mən faktura dövriyyəmi dəyişə bilərəmmi, məsələn aylıqdan illiyə?</h2>
            <p>
              Bəli, dəyişiklik tələb etmək üçün support@fishsound.com mail adresi ilə
              əlaqə saxlayaraq. Dəyişdirildikdən sonra yeni illik və ya aylıq ödəniş
              dövrünüz cari ödəniş müddətinizin sonunda başlayacaq. Xidmət fasiləsiz
              işləməyə davam edəcək.
            </p>
          </div>
        </div>

         

        <div className={styles["faq_row"]}>
          <div>
            <h2>Veb saytımda musiqi oynamaq üçün Fish Sound-dan istifadə edə bilərəmmi?</h2>
            <p>
              Təəssüf ki, yox – Fish Sound yalnız fiziki müəssisələr üçün fon
              musiqisi təqdim edir. Bu o deməkdir ki, Fish Sound onlayn videolar,
              radio, canlı yayım və ya sosial media yazıları üçün də istifadə edilə
              bilməz.
            </p>
          </div>
          <div>
            <h2>İdman zalımda musiqi səsləndirmək üçün Fish Sound istifadə edə bilərəmmi?</h2>
            <p>
              Bəli, siz əsas məşq sahələrində, lobbidə, soyunub-geyinmə otağında və
              istənilən ümumi yerlərdə fon musiqisi səsləndirmək üçün Fish Sound-dan
              istifadə edə bilərsiniz.
            </p>
          </div>
        </div>
 
        <div className={styles["faq_row"]}>
          <div>
           <div className={styles["item_button"]}  >
             <h2>
             Elə indi yoxla!
             </h2>
          </div>
         </div>
          <div>
            <h2>DJ dəstində və ya digər canlı musiqi performansında Fish Sound istifadə edə bilərəmmi?</h2>
            <p>
              Təəssüf ki, yox. Fish Sound yalnız fon musiqisi üçün istifadə edilə
              bilər. Müştərilərin giriş haqqı ödədiyi müəssisələrdə canlı musiqi və
              ifa olunan musiqi əlavə lisenziya tələb edir.
            </p>
          </div>
          
        </div>
 


      </div>

      <Footer />
    </>
  );
}
