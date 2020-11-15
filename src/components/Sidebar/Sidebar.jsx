import React from "react";
import styles from "./Sidebar.module.scss";
import folders from "assets/icons/folders.svg";
import lessons from "assets/icons/lessons.svg";
import resources from "assets/icons/resources.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>Ученик</div>
      <div className={styles.sidebarBody}>
        <div className={styles.sidebarBodyItem}>
          <i className={styles.sidebarBodyItemIcon} src={lessons} />
          <div className={styles.sidebarBodyItemTitle}>Уроки</div>
        </div>
        <div className={styles.sidebarBodyItem}>
          <i className={styles.sidebarBodyItemIcon} src={folders} />
          <div className={styles.sidebarBodyItemTitle}>Мои папки</div>
        </div>
        <div className={styles.sidebarBodyItem}>
          <i className={styles.sidebarBodyItemIcon} src={resources} />
          <div className={styles.sidebarBodyItemTitle}>Общие ресурсы</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
