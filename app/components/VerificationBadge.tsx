import Image from 'next/image';
import styles from './VerificationBadge.module.css';

export default function VerificationBadge() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrap}>
        <Image
          src="/images/checked.gif"
          alt="Verified badge"
          width={261}
          height={261}
          className={styles.badgeImage}
        />
      </div>
    </div>
  );
}
