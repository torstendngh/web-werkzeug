import Icon from '../Icon/Icon'
import styles from './Button.module.css'

const Button = ({onClick, children, icon, style}) => {
  return (
    <button className={`${styles.button}`} onClick={onClick} style={style}>
        {/* <Icon icon={icon}/> */}
        {children}
    </button>
  )
}

export default Button