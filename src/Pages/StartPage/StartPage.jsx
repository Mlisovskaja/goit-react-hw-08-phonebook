import styles from './start-page.module.css';

const StartPage = () => {
  return (
    <>
      <div className={styles.context}>
        <h1>Welcome to Phonebook App</h1>
      </div>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default StartPage;
