import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
  slug: string; // 🔹 yeni əlavə olundu
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, description, image, slug }) => {
  return (
    <Link href={slug} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default PlaylistCard;
