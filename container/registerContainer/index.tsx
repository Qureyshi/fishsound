"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import AiPlaylistForm from "@/components/pages/register/stage3";
import WorkplaceSelector from "@/components/pages/register/stage4";
import OfficeMoodSelector from "@/components/pages/register/stage5";
import GenreSelector from "@/components/pages/register/stage6";
import PlaylistNotification from "@/components/pages/register/stage7";
import SpotifyIntegration from "@/components/pages/register/stage8";
import BusinessInfoForm from "@/components/pages/register/stage1";
import WelcomeStep from "@/components/pages/register/stage2";
import EyeClose from "@/components/icons/EyeClose";
import Eye from "@/components/icons/Eye";

export default function RegisterContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className={styles.register}>
      {currentStep === 1 && (
        <div className={styles.container}>
          <h2 className={styles.title}>Fish Sound-a xoş gəlmisiniz</h2>
          <p className={styles.titletext}>
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
                  if (e.key === "Enter" || e.key === " ")
                    setShowPassword(!showPassword);
                }}
                aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
              >
                {showPassword ? <Eye color="white" /> : <EyeClose color="white" />}
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
                  if (e.key === "Enter" || e.key === " ")
                    setShowConfirmPassword(!showConfirmPassword);
                }}
                aria-label={
                  showConfirmPassword ? "Şifrəni gizlət" : "Şifrəni göstər"
                }
              >
                {showConfirmPassword ? (
                  <Eye color="white" />
                ) : (
                  <EyeClose color="white" />
                )}
              </span>
            </div>
            <input
              type="text"
              placeholder="Müəssisənin adı"
              className={styles.input}
              name="companyName"
            />
            <label htmlFor="businessType" className={styles.label}>
              Biznes tipi
            </label>
            <select
              id="businessType"
              className={styles.input}
              name="businessType"
              defaultValue=""
            >
              <option value="other">Digər</option>
              <option value="retail">Pərakəndə satış</option>
              <option value="service">Xidmətlər</option>
            </select>
            <label htmlFor="aboutBusiness" className={styles.label}>
              Biznesiniz haqqında
            </label>
            <select
              className={styles.input}
              name="aboutBusiness"
              defaultValue=""
            >
              <option value="clothing">Geyim mağazası</option>
              <option value="food">Restoran</option>
              <option value="tech">Texnologiya</option>
            </select>
            <label htmlFor="location" className={styles.label}>
              Ölkə/Şəhər/Rayon
            </label>
            <select className={styles.input} name="location" defaultValue="">
              <option value="azerbaijan_baku_khetai">
                Azərbaycan, Bakı şəhəri, Xətai rayonu
              </option>
              <option value="azerbaijan_ganja">Azərbaycan, Gəncə</option>
            </select>
            <label className={styles.accept}>
              <input type="checkbox" required />
              Qaydalar və şərtlərlə razıyam
            </label>
            <button
              type="submit"
              onClick={handleNext}
              className={styles.loginButton}
              style={{ marginTop: "1rem" }}
            >
              Pulsuz abunəliyi başlat!
            </button>
          </form>
        </div>
      )}

      {currentStep === 2 && <BusinessInfoForm onNext={handleNext} />}
      {currentStep === 3 && <WelcomeStep onNext={handleNext} />}
      {currentStep === 4 && <AiPlaylistForm onNext={handleNext} />}
      {currentStep === 5 && <WorkplaceSelector onNext={handleNext} />}
      {currentStep === 6 && <OfficeMoodSelector onNext={handleNext} />}
      {currentStep === 7 && <GenreSelector onNext={handleNext} />}
      {currentStep === 8 && <PlaylistNotification onNext={handleNext} />}
      {currentStep === 9 && <SpotifyIntegration />}
    </div>
  );
}
