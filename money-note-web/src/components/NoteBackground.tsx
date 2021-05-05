import styles from './NoteBackground.module.scss';

const NoteBackground = () => (
  <div className={styles.background}>
    <div className={styles.background__gap} />
    <div className={styles.background__pattern} />
    <div className={styles.background__gap} />
  </div>
);

export default NoteBackground;
