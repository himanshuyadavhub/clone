import styles from './GradeDetails.module.css';

export default function GradeDetails() {
  return (
    <section className={styles.gradeBox}>
      <h3>Grade Details</h3>
      <ul>
        <li><span>O - Outstanding - 90-100</span></li>
        <li><span>E - Excellent - 80-89</span></li>
        <li><span>A - Very Good - 70-79</span></li>
        <li><span>B - Good - 60-69</span></li>
        <li><span>C - Fair - 50-59</span></li>
        <li><span>D - Average - 40-49</span></li>
        <li><span>P - Pass - 30-39</span></li>
        <li><span>F - Fail - Below 30</span></li>
      </ul>
    </section>
  );
}
