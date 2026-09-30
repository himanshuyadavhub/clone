import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/images/complete_header.png"
        alt="AICTE and EduSkills virtual internship banner with institutional logos, portraits, and supported companies"
        fill
        priority
        sizes="100vw"
      />
    </header>
  );
}
