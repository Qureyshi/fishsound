import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.scss"; 
import AudioPlayer from '@/components/common/audioplayer';

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  isPlaying: boolean;
}

interface PlaylistCardProps {
  playlistName: string;
  songs: Song[];
  playlistImage: string;
}

const ProfilSinglePlaylistContainer: React.FC<PlaylistCardProps> = ({ playlistName, songs, playlistImage }) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>Pleylistin adı :</p>
          <h1 className={styles.title}>{playlistName}</h1>

          <div className={styles.actions}>
            <button className={styles.play}>B</button>
            <button className={styles.location}>M</button>
            <button className={styles.add}>E</button>
            <button className={styles.edit}>D</button>
          </div>
        </div>
        <div className={styles.playlistImage}>
          <Image
            src="/images/playlist_cover.jpg"
            alt="Playlist Image" 
            width={150}
            height={150}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.songList}>
        <div className={styles.songHeader}>
          <span>Mahnı adı</span>
          <span>Sənətçi</span>
          <span>Albüm</span>
          <span>Dəqiqə</span>
        </div>

        {songs.map((song) => (
          <div key={song.id} className={`${styles.songRow} ${song.isPlaying ? styles.active : ''}`}>
            <div className={styles.cover}>
              <Image src={song.cover} alt="Song Cover" width={40} height={40} />
              <span>{song.title}</span>
            </div>
            <span>{song.artist}</span>
            <span>{song.album}</span>
            <span>{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
 
    <AudioPlayer
      songTitle="Kingdom"
      artist="Miyagi"
      coverImage="/images/miyagi.jpg"
      audioSrc="/audio/song.mp3"
    />
    </>
  );
};

export default ProfilSinglePlaylistContainer;
