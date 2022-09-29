import styles from './TopBanner.module.css'

const TopBanner = () => (
  <div className={styles.container}>
    <div className={styles.newBtn}>
      <span className={styles.newBtnTitle}>New</span>
    </div>
    <div className="flex column">
      <span className={styles.text}>
        Hey Jack, Basics of Literature assignment is due <br /> Monday.{' '}
        <span style={{ color: '#667EEA', textDecoration: 'underline', cursor: 'pointer' }}>
          Set a Reminder
        </span>
      </span>
      <span className={styles.date}>19 / 05/ 2050</span>
    </div>
    <img src="/assets/sskoo.png" className={styles.image} />
    <div className={styles.closeBtn}>
      <span className={styles.closeBtnTitle}>Close</span>
    </div>
  </div>
)

export default TopBanner
