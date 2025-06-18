"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import AudioPlayer from "@/components/common/audioplayer";
import Location from "@/components/icons/Location";
import Play from "@/components/icons/Play";
import Plus from "@/components/icons/Plus";
import Update from "@/components/icons/Update";
import SongRow from "@/components/common/plylistrow";
import Stop from "@/components/icons/Stop";
import LocationModal from "@/components/common/locationmodal";
import AddSongModal from "@/components/common/addsongmodal";

interface UnifiedSong {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  isPlaying: boolean;
  audioSrc: string;
}

const ProfilSinglePlaylistContainer = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [songs, setSongs] = useState<UnifiedSong[]>([
    {
      id: 1,
      title: "Kingdom",
      artist: "Miyagi",
      album: "Unknown Album",
      duration: "3:24",
      cover: "/images/singleplaylist.png",
      isPlaying: false,
      audioSrc:
        "https://moosic.my.mail.ru/file/91edde1aef8008fbccaecde3b6d40c15.mp3",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Miyagi",
      album: "Unknown Album",
      duration: "3:22",
      cover: "/images/singleplaylist.png",
      isPlaying: false,
      audioSrc:
        "https://moosic.my.mail.ru/file/3d24f111fbbdbdbe505d110037c8d51c.mp3",
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Miyagi",
      album: "Unknown Album",
      duration: "2:44",
      cover: "/images/singleplaylist.png",
      isPlaying: false,
      audioSrc:
        "https://moosic.my.mail.ru/file/bf99a268e56969bbc2863df887df2ccb.mp3",
    },
  ]);

  const [currentId, setCurrentId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);



  const locationItems = [
  { id: 1, place: "Zeyd Kabab", address: "Bakı, Təbriz, küç.,208C" },
  { id: 2, place: "Zeyd Kabab", address: "Bakı, Təbriz, küç.,208C" },
  { id: 3, place: "Zeyd Kabab", address: "Bakı, Təbriz, küç.,208C" },
  { id: 4, place: "Zeyd Kabab", address: "Bakı, Təbriz, küç.,208C" },
];

const handleConfirm = (selectedIds: number[]) => {
  console.log("Seçilmişlər valideynə:", selectedIds);
  // burda API çağırışı və ya başqa əməliyyatlar edə bilərsən
};

  const handleDelete = (id: number) => {
    setSongs((prev) => prev.filter((song) => song.id !== id));
    if (id === currentId) {
      setCurrentId(null);
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (songs.length > 0) {
        if (currentId === null) {
          setCurrentId(songs[0].id);
        }
        setIsPlaying(true);
      }
    }
  };

  const handleSelectSong = (id: number) => {
    if (id === currentId) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentId(id);
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.playlistdata}>
            <p className={styles.label}>Pleylistin adı :</p>
            <h1 className={styles.title}>Mənim Playlistim</h1>

            <div className={styles.actions}>
              <button className={styles.play} onClick={handleTogglePlay}>
                {isPlaying ? <Stop /> : <Play />}
              </button>
              <button className={styles.location} onClick={() => setIsLocationOpen(true)}>
                <Location />
              </button>
              <button className={styles.add} onClick={() => setIsAddModalOpen(true)}>
                <Plus />
              </button>
              <button className={styles.edit}>
                <Update />
              </button>
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
            <SongRow
              key={song.id}
              {...song}
              isPlaying={isPlaying && currentId === song.id}
              isActive={currentId === song.id}
              onDelete={handleDelete}
              onSelect={handleSelectSong}
              setIsFullscreen={setIsFullscreen}
            />
          ))}
        </div>
      </div>

      {/* AudioPlayer yalnız bir mahnı seçiləndə göstərilsin */}
      {currentId !== null && (
        <AudioPlayer
          playlist={songs}
          currentId={currentId}
          setCurrentId={setCurrentId}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
        />
      )}
      {isLocationOpen && (
        <LocationModal
          items={locationItems}
          onClose={() => setIsLocationOpen(false)}
          onConfirm={handleConfirm}
        />
      )}
      {isAddModalOpen && (
        <AddSongModal onClose={() => setIsAddModalOpen(false)} />
      )}
 
    </>
  );
};

export default ProfilSinglePlaylistContainer;