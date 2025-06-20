import React from 'react';
import styles from "./styles.module.scss";
import PlaylistCard from '@/components/common/playlistcard';
import Search from '@/components/icons/Search';

const playlists = [
  {
    id: 1,
    title: 'Playlist 1',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 2,
    title: 'Playlist 2',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 3,
    title: 'Playlist 3',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 4,
    title: 'Playlist 4',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 5,
    title: 'Playlist 5',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
];

export default function SearchContainer() {
  return (
    <div className="main">
      <div className={styles.container}>

        <div className={styles.searchBox}>
          <div className={styles.icon}>
            <Search />
          </div>
          <input
            type="text"
            placeholder="Musiqi axtar"
            className={styles.input}
          />
        </div>

        <div>
          <h1 className={styles.heading}>Fılan janrda pleylistlər</h1>
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
          <h1 className={styles.heading}>Fılan janrda pleylistlər</h1>
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
          <h1 className={styles.heading}>Fılan janrda pleylistlər</h1>
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
