"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Loop from "@/components/icons/Loop";
import Close from "@/components/icons/Close";
import Stop from "@/components/icons/Stop";
import Play from "@/components/icons/Play";
import Prev from "@/components/icons/Prev";
import Next from "@/components/icons/Next";
import Edit from "@/components/icons/Edit";

function formatTime(sec: number) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  isPlaying: boolean;
  audioSrc: string;
}

interface AudioPlayerProps {
  playlist: Song[];
  currentId: number | null;
  setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isFullscreen: boolean;
  setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  playlist,
  currentId,
  setCurrentId,
  isPlaying,
  setIsPlaying,
  isFullscreen,
  setIsFullscreen,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSong =
    playlist.find((song) => song.id === currentId) || playlist[0];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
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

  const handleNext = () => {
    if (!currentId) return;
    const currentIndex = playlist.findIndex((s) => s.id === currentId);
    const nextIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
    setCurrentId(playlist[nextIndex].id);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (!currentId) return;
    const currentIndex = playlist.findIndex((s) => s.id === currentId);
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    setCurrentId(playlist[prevIndex].id);
    setIsPlaying(true);
  };

  const handleEnded = () => {
    handleNext();
  };

  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    if (audioRef.current.src !== currentSong.audioSrc) {
      audioRef.current.src = currentSong.audioSrc;
      setCurrentTime(0);
    }

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [currentId, isPlaying]);

  const progressPercent = (currentTime / duration) * 100 || 0;

  return (
    <div
      className={
        isFullscreen ? styles.fullscreenPlayerContainer : styles.playerContainer
      }
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {isFullscreen ? (
        <>
          <button
            onClick={() => setIsFullscreen(false)}
            className={styles.closeButton}
          >
            <Close/> 
          </button>

          <div className={styles.fullCoverWrapper}>
            <Image
              src={currentSong.cover}
              alt={currentSong.title}
              width={300}
              height={300}
              className={styles.fullCoverImage}
            />
          </div>

          <div className={styles.songTextCenter}>
            <h1>{currentSong.title}</h1>
            <p>{currentSong.artist}</p>
          </div>
        
        <div className={styles.fullControlsWrapper}>
          <div className={styles.fullControls}>
            <button onClick={handlePrevious}><Prev/></button>
            <button onClick={togglePlay}>{isPlaying ? <Stop/> : <Play/>}</button>
            <button onClick={handleNext}><Next/></button>
          </div>

          
          <div className={styles.progressWrapper}>
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className={styles.progress}
              style={{
                background: `linear-gradient(to right, white ${progressPercent}%, #939393 ${progressPercent}%)`,
              }}
            />
            <span  className={styles.currenttime}>{formatTime(currentTime)}</span>
            <span  className={styles.duration}>{formatTime(duration)}</span>

 

          </div>
          <div className={styles.edit}><Edit/></div>
        </div>
        </>
      ) : (
        <>
          <div className={styles.songInfo}>
            <Image
              src={currentSong.cover}
              alt={currentSong.title}
              width={48}
              height={48}
              className={styles.coverImage}
            />
            <div className={styles.songText}>
              <span className={styles.title}>{currentSong.title}</span>
              <span className={styles.artist}>{currentSong.artist}</span>
            </div>
          </div>

          <div className={styles.controls}>
            <div>
              <button onClick={handlePrevious}><Prev/></button>
              <button onClick={togglePlay}>{isPlaying ? <Stop/> : <Play/>}</button>
              <button onClick={handleNext}><Next/></button>
            </div>
            <div className={styles.progressWrapper}>
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className={styles.progress}
                style={{
                  background: `linear-gradient(to right, white ${progressPercent}%, #939393 ${progressPercent}%)`,
                }}
              />
              <span  className={styles.currenttime}>{formatTime(currentTime)}</span>
            <span  className={styles.duration}>{formatTime(duration)}</span>
            </div>
          </div>

          <div>
            <Loop />
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
