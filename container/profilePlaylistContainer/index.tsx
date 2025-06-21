"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import PlaylistCard from "@/components/common/playlistcard";
import Create from "@/components/icons/Create";

const playlists = [
  { id: 1, title: "Playlist 1", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 2, title: "Playlist 2", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 3, title: "Playlist 3", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 4, title: "Playlist 4", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 5, title: "Playlist 5", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 6, title: "Playlist 6", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 7, title: "Playlist 7", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 8, title: "Playlist 8", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 9, title: "Playlist 9", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
  { id: 10, title: "Playlist 10", description: "Playlist üçün", image: "/images/playlist_cover.jpg", slug: "slug" },
];



export default function PlaylistContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("Playlist № 1");

  return (
    <div className='main'>
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Playlistlərim</h1>
        <div className={styles.crt_btn} onClick={() => setIsModalOpen(true)}>
          <div><Create /></div>
          <div>Playlist yarat</div> 
        </div>
      </div>

      <div className={styles.grid}>
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.title}
            description={playlist.description}
            image={playlist.image}
            slug={`/profile/playlist/${playlist.slug}`}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>×</button>
            <h2>Playlist yarat</h2>

            <div className={styles.floatingInput}>
              <input
                type="text"
                id="playlist-name"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                required
              />
              <label htmlFor="playlist-name">Playlistin adını qeyd et</label>
            </div>

            <div className={styles.modalButtons}>
              <button className={styles.emptyBtn}>Boş playlist yarat</button>
              <button className={styles.aiBtn}>Süni intellekt yaratsın</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
