import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import useAction from "hooks/useAction";
import { actions } from "models/auth/slice";
import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import Main from "./Main/Main";

const Home = () => {
  const getAccess = useAction(actions.getAccess);
  useEffect(() => {
    console.log("effect");
    getAccess();
  }, [getAccess]);
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.main}>
        <Header title="Уроки" />
        <Main />
      </div>
    </div>
  );
};

export default Home;
