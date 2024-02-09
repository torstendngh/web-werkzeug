import styles from './AppLayout.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Sidebar/>
      <Outlet />
    </div>
  )
}

export default AppLayout
