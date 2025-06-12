import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
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
    </div>
  );
};

export default PlaylistCard;
