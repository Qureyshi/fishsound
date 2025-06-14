import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';
 

export default function ProfileHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
        className={styles.logo}
        src="/images/logo/logo1.svg"
        alt="Logo"
        width={100}
        height={100} 
        
      />
       
         
      </Link>

      <Link href="/profile/account" className={styles.profile}>
        Hesabım  
      </Link>
    </header>
  )
}
