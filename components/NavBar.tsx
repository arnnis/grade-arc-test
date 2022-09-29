import styles from './NavBar.module.css'
import cx from 'classnames'
import { useState } from 'react'

const NavBar = () => {
  const options = [
    { title: 'Home', icon: '/icons/home.png' },
    { title: 'Calendar', icon: '/icons/calendar.svg' },
    { title: 'Chat', icon: '/icons/chat.svg' },
  ]
  const [active, setActive] = useState('Home')
  const [collpase, setCollapse] = useState(false)

  return (
    <div className={styles.container} style={{width: collpase? 75 : 248}}>
      <div className={styles.header}>
        <img src="/icons/logo.svg" onClick={() => collpase && setCollapse(false)} />
        <span className={styles.brand}>Grade Arc</span>
        <img src="/icons/close-navbar.svg" className={styles.closeIcon} onClick={() => setCollapse(!collpase)} />
      </div>
      <div className={styles.body}>
        {options.map((option, i) => (
          <div
            className={cx(
              styles.option,
              active === option.title && styles.optionActive
            )}
            onClick={() => setActive(option.title)}
          >
            <img src={option.icon} className={styles.optionIcon} />
            {!collpase && <span
              className={cx(
                styles.optionTitle,
                active === option.title && styles.optionTitleActive
              )}
            >
              {option.title}
            </span>}
          </div>
        ))}
      </div>
    </div>
  )
}
export default NavBar
