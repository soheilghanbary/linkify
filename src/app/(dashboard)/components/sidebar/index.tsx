import { Logo } from "@components/icons"

import { SidebarBody } from "./sidebar-body"
import styles from "./sidebar.module.scss"

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles["sidebar-header"]}>
        <Logo />
        <span>Linkify</span>
      </div>
      <SidebarBody />
    </aside>
  )
}
