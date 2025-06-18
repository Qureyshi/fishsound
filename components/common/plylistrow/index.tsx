"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import Edit from "@/components/icons/Edit";
import Stop from "@/components/icons/Stop";
import Image from "next/image";

interface SongRowProps {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover?: string;
  isActive: boolean;
  isPlaying: boolean;
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
  setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SongRow: React.FC<SongRowProps> = ({
  id,
  title,
  artist,
  album,
  duration,
  cover,
  isActive,
  isPlaying,
  onDelete,
  onSelect,
  setIsFullscreen,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOptions((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${styles.songRow} ${
        isPlaying && isActive ? styles.active : ""
      }`}
      onClick={() => onSelect(id)}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.cover}>
        <div className={styles.imageWrapper}>
          <Image
            src={cover || "/images/singleplaylist.png"}
            alt="Cover"
            width={40}
            height={40}
            className={styles.image}
          />
          {isPlaying && isActive && (
            <div className={styles.stopOverlay}>
              <Stop color="white" />
            </div>
          )}
        </div>
        <span>{title}</span>
      </div>

      <span>{artist}</span>
      <span>{album}</span>
      <span>{duration}</span>

      <div className={styles.actions} ref={menuRef}>
        <button
          onClick={toggleOptions}
          className={styles.more}
          aria-label="More options"
        >
          <Edit />
        </button>

        {showOptions && (
          <div
            className={styles.dropdown}
            onClick={(e) => e.stopPropagation()}
          >
            <button>Başqa pleylistə əlavə et</button>
            <button onClick={() => onDelete(id)}>Pleylistdən sil</button>
            <button>Növbəyə əlavə et</button>
            <button onClick={() => setIsFullscreen(true)}>Musiqi ekranını aç</button>
            <button>Paylaş</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongRow;
