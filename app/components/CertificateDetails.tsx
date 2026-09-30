import styles from './CertificateDetails.module.css';

export default function CertificateDetails() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <span className={styles.label}>Certificate ID:</span>
        <span className={styles.value}>b31b21b0408fe4d511ce6e544c354d63</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Issued On:</span>
        <span className={styles.value}>10 Sep 2025</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Issued To:</span>
        <span className={styles.value}>MD SHAJID Alam</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Institute:</span>
        <span className={styles.value}>Galgotias University</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Internship:</span>
        <span className={styles.value}>GOOGLE ANDROID DEVELOPER VIRTUAL INTERNSHIP (JUL - SEP 2025)</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Grade:</span>
        <span className={styles.value}>E</span>
      </div>
    </section>
  );
}
