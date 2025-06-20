import React from 'react';
import styles from "./styles.module.scss";
import PlaylistCard from '@/components/common/playlistcard';
import Search from '@/components/icons/Search';

const playlists = [
  { id: 1, title: 'Playlist 1', description: 'Playlist üçün', image: '/images/playlist_cover.jpg' },
  { id: 2, title: 'Playlist 2', description: 'Playlist üçün', image: '/images/playlist_cover.jpg' },
  { id: 3, title: 'Playlist 3', description: 'Playlist üçün', image: '/images/playlist_cover.jpg' },
  { id: 4, title: 'Playlist 4', description: 'Playlist üçün', image: '/images/playlist_cover.jpg' },
  { id: 5, title: 'Playlist 5', description: 'Playlist üçün', image: '/images/playlist_cover.jpg' },
];

export default function ProfilHomeContainer() {
  return (
    <div className='main'>
      <div className={styles.container}>
        <div className={styles.flexbox}>
          <h2 className={styles.welcome}>Xoş gəlmişsiniz!</h2>
          <div className={styles.searchBox}>
            <div className={styles.icon}><Search /></div>
            <input type="text" placeholder="Musiqi axtar" className={styles.input} />
          </div>
        </div>

        <div>
          <h1>Sizin zövqünüzə ən uyğun pleylistlər</h1>
          <div className={styles.grid}>
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
              />
            ))}
          </div>
        </div>

        <h1 className={styles.heading}>Ən məşhur pleylistlər</h1>
        <section className={styles.banner}>
          <div className={styles.textBox}>
            <h2>İndi (seçdiyin müəssisənin adı)-lar’da ən çox bunlar dinlənilir!</h2>
            <p>Pleylistin infosu</p>
            <button>Pleylistə get</button>
          </div>
          <div className={styles.cardBox}>
            {/* Yaşıl qutu ilə təmsil edilir */}
          </div>
        </section>

        <div>
          <h1 className={styles.heading}>XXXXXXX pleylistlər</h1>
          <div className={styles.grid}>
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.heading}>XXXXXXX pleylistlər</h1>
          <div className={styles.grid}>
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
