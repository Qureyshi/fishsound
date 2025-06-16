import React from 'react';
import styles from "./styles.module.scss";
import PlaylistCard from '@/components/common/playlistcard';
import Create from '@/components/icons/Create';

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
  {
    id: 6,
    title: 'Playlist 6',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 7,
    title: 'Playlist 7',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 8,
    title: 'Playlist 8',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 9,
    title: 'Playlist 9',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
  {
    id: 10,
    title: 'Playlist 10',
    description: 'Playlist üçün',
    image: '/images/playlist_cover.jpg',
  },
];

export default function PlaylistContainer() {
  return (
    <div className={styles.container}>
      
      <div  className={styles.heading}>
      <h1>Playlistlərim</h1>
      <div>
      <div className={styles.crt_btn}><Create/>Playlist yarat</div>
      </div>
      </div>
      
      <div>
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
    
  );
}
