import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import folders from "assets/icons/folders.svg";
import lessons from "assets/icons/lessons.svg";
import resources from "assets/icons/resources.svg";
import database from "assets/icons/database.svg";
import TransitionModal from "components/TransitionModal/TransitionModal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { actions } from "models/auth/slice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [modalState, changeModalState] = useState(false);
  const [modalInputState, changeModalInputState] = useState({
    username: "",
    password: "",
  });

  const modalStateHandler = (e) => {
    changeModalInputState({
      ...modalInputState,
      [e.target.name]: e.target.value,
    });
  };

  const openMolal = () => {
    changeModalState(true);
  };

  const sendData = React.useCallback(() => {
    const data = modalInputState.username + ":" + modalInputState.password;
    dispatch({
      type: actions.getTokens,
      payload: { data },
    });
  }, [dispatch, modalInputState]);

  return (
    <div className={styles.root}>
      <div className={styles.sidebarHeader}>
        <Button variant="contained" color="primary" onClick={openMolal}>
          Войти
        </Button>
      </div>
      <div className={styles.sidebarBody}>
        <div className={styles.sidebarBodyItem}>
          <img
            className={styles.sidebarBodyItemIcon}
            src={lessons}
            alt="lessons"
          />
          <div className={styles.sidebarBodyItemTitle}>Уроки</div>
        </div>
        <div className={styles.sidebarBodyItem}>
          <img
            className={styles.sidebarBodyItemIcon}
            src={folders}
            alt="folders"
          />
          <div className={styles.sidebarBodyItemTitle}>Мои папки</div>
        </div>
        <div className={styles.sidebarBodyItem}>
          <img
            className={styles.sidebarBodyItemIcon}
            src={resources}
            alt="resorces"
          />
          <div className={styles.sidebarBodyItemTitle}>Общие ресурсы</div>
        </div>
        <div className={styles.sidebarBodyItem}>
          <img
            className={styles.sidebarBodyItemIcon}
            src={database}
            alt="database"
          />
          <div className={styles.sidebarBodyItemTitle}>Шаблоны уроков</div>
        </div>
        <TransitionModal isOpen={modalState} openHandler={changeModalState}>
          <div className={styles.auth}>
            <Typography align="center" color="primary" variant="h5">
              Авторизация
            </Typography>
            <div className={styles.inputs}>
              <TextField
                label="Имя пользователя"
                name="username"
                color="primary"
                type="text"
                value={modalInputState["username"]}
                onChange={modalStateHandler}
                required
              />
              <TextField
                label="Пароль"
                name="password"
                type="password"
                color="primary"
                onChange={modalStateHandler}
                value={modalInputState["password"]}
                required
              />
            </div>
            <div className={styles.footer}>
              <Button variant="contained" color="primary" onClick={sendData}>
                Войти
              </Button>
            </div>
          </div>
        </TransitionModal>
      </div>
    </div>
  );
};

export default Sidebar;
