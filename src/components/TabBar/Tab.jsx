import Icon from '../Icon/Icon'
import styles from './Tab.module.css'

const Tab = ({onClick, isSelected = false, children, icon, iconColor, style}) => {
  return (
    <button className={`${styles.tab} ${isSelected ? styles.isSelected : ""}`} onClick={onClick} style={style}>
        <div className={styles.icon} style={{color: iconColor}}>
            <Icon icon={icon}/>
        </div>
        {children}
    </button>
  )
}

export default Tab