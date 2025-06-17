"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

function formatTime(sec: number) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

interface AudioPlayerProps {
  playlist: {
    songTitle: string;
    artist: string;
    coverImage: string;
    audioSrc: string;
  }[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ playlist }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSong = playlist[currentIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
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
    setCurrentIndex((prev) => (prev < playlist.length - 1 ? prev + 1 : 0));
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : playlist.length - 1
    );
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentIndex, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const handler = () => setDuration(audio.duration);
      if (audio.readyState >= 1) {
        handler();
      } else {
        audio.addEventListener("loadedmetadata", handler);
      }

      return () => {
        audio.removeEventListener("loadedmetadata", handler);
      };
    }
  }, [currentIndex]);

  return (
    <div className={styles.playerContainer}>
      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />

      <div className={styles.songInfo}>
        <Image
          src={currentSong.coverImage}
          alt={currentSong.songTitle}
          width={40}
          height={40}
        />
        <div className={styles.songText}>
          <span className={styles.title}>{currentSong.songTitle}</span>
          <span className={styles.artist}>{currentSong.artist}</span>
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={handleNext}>Next</button>

        <span className={styles.time}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

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
        {/* Expand icon (if needed) */}
      </div>
    </div>
  );
};

export default AudioPlayer;
