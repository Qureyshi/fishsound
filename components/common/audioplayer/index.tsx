"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
 

interface AudioPlayerProps {
  songTitle: string;
  artist: string;
  coverImage: string;
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ songTitle, artist, coverImage, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const time = parseFloat(e.target.value);
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <div className={styles.playerContainer}>
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleLoadedMetadata}
      />
      
      <div className={styles.songInfo}>
        <Image src={coverImage} alt={songTitle} width={40} height={40} />
        <div className={styles.songText}>
          <span className={styles.title}>{songTitle}</span>
          <span className={styles.artist}>{artist}</span>
        </div>
      </div>

      <div className={styles.controls}>
       {/**  <FaBackward />
        {isPlaying ? <FaPause onClick={togglePlay} /> : <FaPlay onClick={togglePlay} />}
        <FaForward />*/}

        <button  onClick={togglePlay} >bdfj</button>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className={styles.progress}
        />
      </div>

      <div className={styles.expand}>
        {/**<FaExpand /> */}
      </div>
    </div>
  );
};

export default AudioPlayer;
