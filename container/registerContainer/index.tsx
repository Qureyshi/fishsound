"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import RegistrationPrompt from "@/components/pages/register/registerprompt";
import Stage3 from "@/components/pages/register/stage3";
import AiPlaylistForm from "@/components/pages/register/stage3";
import WorkplaceSelector from "@/components/pages/register/stage4";
import OfficeMoodSelector from "@/components/pages/register/stage5";
import GenreSelector from "@/components/pages/register/stage6";
import PlaylistNotification from "@/components/pages/register/stage7";
import SpotifyIntegration from "@/components/pages/register/stage8";

export default function RegisterContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Navbar />
      
      <div className={styles.container}>
        <h2 className={styles.title}>Fish Sound-a xoş gəlmisiniz</h2>
        <p  className={styles.titletext}>
          Profilinizi tamamlayaraq xidmətinizi qurun
        </p>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Ad"
            className={styles.input}
            name="firstName"
          />

          <input
            type="text"
            placeholder="Soyad"
            className={styles.input}
            name="lastName"
          />

          <input
            type="email"
            placeholder="E-poçt"
            className={styles.input}
            name="email"
          />

          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Şifrə"
              className={styles.input}
              name="password"
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowPassword(!showPassword);
              }}
              aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className={styles.passwordWrapper}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Şifrənin təkrarı"
              className={styles.input}
              name="confirmPassword"
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowConfirmPassword(!showConfirmPassword);
              }}
              aria-label={showConfirmPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <input
            type="text"
            placeholder="Müəssisənin adı"
            className={styles.input}
            name="companyName"
          />

          <select className={styles.input} name="businessType" defaultValue="">
            <option value="" disabled>
              Biznes tipi
            </option>
            <option value="other">Digər</option>
            <option value="retail">Pərakəndə satış</option>
            <option value="service">Xidmətlər</option>
          </select>

          <select className={styles.input} name="aboutBusiness" defaultValue="">
            <option value="" disabled>
              Biznesiniz haqqında
            </option>
            <option value="clothing">Geyim mağazası</option>
            <option value="food">Restoran</option>
            <option value="tech">Texnologiya</option>
          </select>

          <select className={styles.input} name="location" defaultValue="">
            <option value="" disabled>
              Ölkə/Şəhər/Rayon
            </option>
            <option value="azerbaijan_baku_khetai">Azərbaycan, Bakı şəhəri, Xətai rayonu</option>
            <option value="azerbaijan_ganja">Azərbaycan, Gəncə</option>
          </select>

          <label className={styles.accept}
            style={{
              fontSize: "0.9rem",
              marginTop: "1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <input  type="checkbox" required />
            Qaydalar və şərtlərlə razıyam
          </label>

          <button type="submit" className={styles.loginButton} style={{ marginTop: "1rem" }}>
            Pulsuz abunəliyi başlat!
          </button>
        </form>
      </div>
{/**
      <RegistrationPrompt/>
 
     <AiPlaylistForm/>  <WorkplaceSelector/> <OfficeMoodSelector/><GenreSelector/>  <PlaylistNotification/>

   <SpotifyIntegration/>
      */}

      
      <Footer />
    </>
  );
}
