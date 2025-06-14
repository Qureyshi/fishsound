
import ProfilSinglePlaylistContainer from '@/container/profileSinglePlaylistContainer'
import React from 'react'

export default function Account() {
const songs = [
    {
      id: 1,
      title: 'Kingdom',
      artist: 'Miyagi',
      album: 'Buster Keaton',
      duration: '3:31',
      cover: '/images/miyagi.jpg', // public folder'a yerləşdir
      isPlaying: true,
    },
    {
      id: 2,
      title: 'Kingdom',
      artist: 'Miyagi',
      album: 'Buster Keaton',
      duration: '3:31',
      cover: '/images/miyagi.jpg',
      isPlaying: false,
    },
  ];


  return (
     <ProfilSinglePlaylistContainer
      playlistName="Pleylist №1"
      songs={songs}
      playlistImage="/images/miyagi.jpg"
    />
  )
}



   