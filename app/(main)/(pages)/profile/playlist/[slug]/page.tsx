 import ProfilSinglePlaylistContainer from '@/container/profileSinglePlaylistContainer'
import React from 'react'

export default function Account() {

  const playlistData = {
  playlistName: "Pleylist №1",
  playlistImage: "/images/playlist_cover.jpg",
  songs: [
    {
      id: 1,
      title: "Kingdom",
      artist: "Miyagi",
      album: "Buster Keaton",
      duration: "3:45",
      cover: "/images/miyagi.jpg",
      isPlaying: true,
    },
    {
      id: 2,
      title: "Higher",
      artist: "Eminem",
      album: "Music To Be Murdered By - Side B",
      duration: "4:04",
      cover: "/images/eminem.jpg",
      isPlaying: false,
    },
    {
      id: 3,
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:35",
      cover: "/images/weeknd.jpg",
      isPlaying: false,
    },
    {
      id: 4,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      cover: "/images/dua_lipa.jpg",
      isPlaying: false,
    },
  ],
};

 
 


  return (
     <ProfilSinglePlaylistContainer
        playlistName={playlistData.playlistName}
        playlistImage={playlistData.playlistImage}
        songs={playlistData.songs}
      />
       
  )
}



   