import styles from './TextInput.module.css'

const TextInput = ({placeholder, value, onChange}) => {
  return (
    <input className={styles.input} type='text' placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default TextInput