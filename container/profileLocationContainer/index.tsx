"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Search from "@/components/icons/Search";
import Arrowdown from "@/components/icons/Arrowdown";
import Edit from "@/components/icons/Edit";
import Add from "@/components/icons/Add";

const locations = [
  { id: 1, place: "Zeyd Kabab", address: "Bakı, Tabriz küç, 20B", status: "Status", song: "Kingdom - Miyagi" },
  { id: 2, place: "Sofa Lounge", address: "Bakı, Nərimanov pr, 10A", status: "Status", song: "Freestyle - Jony" },
  { id: 3, place: "Tufan Cafe", address: "Şəki, İsmayıllı yolu 45", status: "Aktiv", song: "Oy dağlar - Röya" },
];

export default function LocationContainer() {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main" ref={containerRef}>
      <div className={styles.wrapper}>
        <h1>Məkanlar</h1>
        <p className={styles.subtitle}>Zonalarınızı, yerlərinizi və oxunan musiqiləri idarə edin.</p>

        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <div className={styles.icon}>
              <Search />
            </div>
            <input type="text" placeholder="Məkan axtar" className={styles.input} />
          </div>

          <div className={styles.selectWrapper}>
            <select>
              <option>Şəhər</option>
              <option>Baki</option>
              <option>Şəki</option>
            </select>
            <span className={styles.arrowIcon}><Arrowdown/></span>
          </div>

          <div className={styles.selectWrapper}>
            <select>
              <option>Məkan</option>
              <option>Zeyd Kabab</option>
              <option>Sefa Lounge</option>
            </select>
            <span className={styles.arrowIcon}><Arrowdown/></span>
          </div>
 

          <div className={styles.crt_btn}>
            <span>  Məkan əlavə et</span> 
            <Add/>
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Məkan</span>
            <span>Ünvan</span>
            <span>Status</span>
            <span>Hansı mahnı oxunur</span>
          </div>

          {locations.map((item) => (
            <div key={item.id} className={styles.row}>
              <span>{item.place}</span>
              <span>{item.address}</span>
              <span>{item.status}</span>
              <span>{item.song}</span>
              <div className={styles.actions}>
                <button
                  className={styles.moreButton}
                  onClick={() => toggleDropdown(item.id)}
                  aria-haspopup="true"
                  aria-expanded={openDropdownId === item.id}
                >
                  <Edit/>
                </button>

                {openDropdownId === item.id && (
                  <div className={styles.dropdown}>
                    <div onClick={() => setOpenDropdownId(null)}>Adını dəyişdir</div>
                    <div onClick={() => setOpenDropdownId(null)}>Xüsusiyyətlər</div>
                    <div onClick={() => setOpenDropdownId(null)}>Anons seç</div>
                    <div onClick={() => setOpenDropdownId(null)}>Musiqi ekranı aç</div>
                    <div onClick={() => setOpenDropdownId(null)}>Hamısında oxut</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
