import styles from "./IconsScreen.module.css"
import Tile from "./Tile"
import iconPacks from '../../constants/icons'

const IconsScreen = () => {

  return (
    <div className={styles.iconsScreen}>
        <div className={styles.titleContainer}>
            <span className={styles.title}>Icons</span>
            <span className={styles.description}>Free SVG icon sources</span>
        </div>
        <div className={styles.body}>
            {
                iconPacks.map((iconPack, index) => <Tile key={index} tile={iconPack} onClick={() => window.open(iconPack.url, "_blank")}/>)
            }
        </div>
    </div>
  )
}

export default IconsScreen