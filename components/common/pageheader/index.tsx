import React from 'react';
import styles from './styles.module.scss';

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className={styles.header_container}>
      <div className={styles.circle}></div>
      <div>
        <div className={styles.rectangle3}></div>
        <h2 className={styles.txt}>{title}</h2>
      </div>
      <div className={styles.circle}></div>
    </div>
  );
}
