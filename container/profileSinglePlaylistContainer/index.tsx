import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.scss"; 
import AudioPlayer from '@/components/common/audioplayer';
import Location from '@/components/icons/Location';
import Play from '@/components/icons/Play';
import Plus from '@/components/icons/Plus';
import Edit from '@/components/icons/Edit';
import Update from '@/components/icons/Update';

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



const playlist = [
  {
    songTitle: "Kingdom",
    artist: "Miyagi",
    coverImage: "/images/singleplaylist.png",
    audioSrc: "https://moosic.my.mail.ru/file/91edde1aef8008fbccaecde3b6d40c15.mp3",
  },
  {
    songTitle: "Song 2",
    artist: "Miyagi",
    coverImage: "/images/singleplaylist.png",
    audioSrc: "https://moosic.my.mail.ru/file/3d24f111fbbdbdbe505d110037c8d51c.mp3",
  },
  {
    songTitle: "Song 3",
    artist: "Miyagi",
    coverImage: "/images/singleplaylist.png",
    audioSrc: "https://moosic.my.mail.ru/file/bf99a268e56969bbc2863df887df2ccb.mp3",
  },
   
]

const ProfilSinglePlaylistContainer: React.FC<PlaylistCardProps> = ({ playlistName, songs, playlistImage }) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.playlistdata}>
          <p className={styles.label}>Pleylistin adı :</p>
          <h1 className={styles.title}>{playlistName}</h1>

          <div className={styles.actions}>
            <button className={styles.play}><Play/></button>
            <button className={styles.location}><Location/></button>
            <button className={styles.add}><Plus/></button>
            <button className={styles.edit}><Update/></button>
          </div>
        </div>
        <div className={styles.playlistImage}>
          <Image
            src="/images/singleplaylist.png"
            alt="Playlist Image" 
            width={278}
            height={278}
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
              <Image src="/images/singleplaylist.png" alt="Song Cover" width={40} height={40} />
              <span>{song.title}</span>
            </div>
            <span>{song.artist}</span>
            <span>{song.album}</span>
            <span>{song.duration}</span>
            <span className={styles.edit}><Edit/></span>
          </div>
        ))}
      </div>
    </div>
 
        <AudioPlayer playlist={playlist} />;
    </>
  );
};

export default ProfilSinglePlaylistContainer;
 