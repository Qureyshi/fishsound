"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from "./styles.module.scss";
import Search from '@/components/icons/Search';
import Arrowdown from '@/components/icons/Arrowdown';
import Stop from '@/components/icons/Stop';
import Play from '@/components/icons/Play';
import Edit from '@/components/icons/Edit';
import Add from '@/components/icons/Add';

export default function ProfilAnnounceContainer() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [progresses, setProgresses] = useState<number[]>([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Səhər Elanı",
      audio: "https://www.orangefreesounds.com/wp-content/uploads/2016/07/Piano-Concerto-No.23-In-A-Major-K-488-Adagio.mp3",
      duration: "1:23",
    },
    {
      id: 2,
      title: "Axşam Elanı",
      audio: "https://www.orangefreesounds.com/wp-content/uploads/2016/07/Piano-Concerto-No.23-In-A-Major-K-488-Adagio.mp3",
      duration: "1:23",
    },
  ]);

  useEffect(() => {
    setProgresses(new Array(announcements.length).fill(0));
  }, [announcements]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
    }
  };

  const togglePlay = (index: number) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex]?.pause();
      }
      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    setProgresses((prev) => {
      const newProgresses = [...prev];
      newProgresses[index] = percent;
      return newProgresses;
    });
  };

  const handleEnded = (index: number) => {
    setPlayingIndex(null);
    setProgresses((prev) => {
      const newProgresses = [...prev];
      newProgresses[index] = 0;
      return newProgresses;
    });
  };

  const handleProgressClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const clickRatio = clickX / width;
    audio.currentTime = clickRatio * audio.duration;

    setProgresses((prev) => {
      const newProgresses = [...prev];
      newProgresses[index] = clickRatio * 100;
      return newProgresses;
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(`.${styles.dropdownMenu}`) &&
        !target.closest(`.${styles.moreButton}`)
      ) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='main'>
      <div className={styles.wrapper}>
        <h1>Anonslar</h1>
        <p className={styles.subtitle}>
          Yeni anonslar yaradın və ya mövcud anonslara düzəliş edin.
        </p>

        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <div className={styles.icon}><Search /></div>
            <input type="text" placeholder="Məkan axtar" className={styles.input} />
          </div>

          <div className={styles.selectWrapper}>
            <select>
              <option>Status</option>
              <option>Gözləyir</option>
              <option>Bitib</option>
            </select>
            <span className={styles.arrowIcon}><Arrowdown /></span>
          </div>

          <div className={styles.crt_btn} onClick={() => setIsFirstModalOpen(true)}>
            <Add /> Anons əlavə et
          </div>
        </div>

       <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span>Anonsun adı</span>
          <span>Dinlə</span>
          <span>Neçə dəqiqədir</span>
          <span></span>
        </div>

        {announcements.map((announce, i) => (
          <div key={announce.id} className={styles.row}>
            <span>{announce.title}</span>

            <div className={styles.customPlayer}>
              <button onClick={() => togglePlay(i)} className={styles.playButton}>
                {playingIndex === i ? <Stop /> : <Play />}
              </button>

              <div
                className={styles.progressWrapper}
                onClick={(e) => handleProgressClick(i, e)}
              >
                <div
                  className={styles.progressBar}
                  style={{ width: `${progresses[i]}%` }}
                />
              </div>

              <audio
                ref={(el) => {
                  if (el) audioRefs.current[i] = el;
                }}
                src={announce.audio}
                onTimeUpdate={() => handleTimeUpdate(i)}
                onEnded={() => handleEnded(i)}
              />
            </div>

            <span>{announce.duration}</span>

            <div className={styles.edit}>
              <button
                className={styles.moreButton}
                onClick={() => setOpenDropdownIndex(openDropdownIndex === i ? null : i)}
              >
                <Edit />
              </button>
              {openDropdownIndex === i && (
                <div className={styles.dropdownMenu}>
                  <div onClick={() => setOpenDropdownIndex(null)}>Adını dəyişdir</div>
                  <div onClick={() => setOpenDropdownIndex(null)}>Xüsusiyyətlər</div>
                  <div onClick={() => setOpenDropdownIndex(null)}>Anons seç</div>
                  <div onClick={() => setOpenDropdownIndex(null)}>Musiqi ekranı aç</div>
                  <div onClick={() => setOpenDropdownIndex(null)}>Hamısında oxut</div>
                </div>
              )}
            </div>
          </div>
        ))}
        </div>
        {isFirstModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button className={styles.closeBtn} onClick={() => setIsFirstModalOpen(false)}>×</button>
              <div
                className={styles.dropZone}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <div className={styles.iconLarge}>⬆️</div>
                <p>Drag and Drop here</p>
                <span>or</span>
                <label className={styles.selectFileBtn}>
                  Select file
                  <input type="file" hidden onChange={handleFileSelect} />
                </label>
                <button className={styles.aiButton}>Süni intellekt ilə səsləndir</button>
              </div>
            </div>
          </div>
        )}

        {isSecondModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button className={styles.closeBtn} onClick={() => setIsSecondModalOpen(false)}>×</button>
              <textarea placeholder="Səsləndirmək istədiyiniz anonsu daxil edin"></textarea>
              <button className={styles.confirmBtn} onClick={() => setIsSecondModalOpen(false)}>Təsdiqə</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
