import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./Header.module.scss";

const Header = ({ title }) => (
  <AppBar position="static" className={styles.header}>
    <Toolbar>
      <Typography variant="inherit" align="center" className={styles.typo}>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default React.memo(Header);
