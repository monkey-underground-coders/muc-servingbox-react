import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import styles from "./Home.module.scss";
import Main from "./Main/Main";

const Home = () => {
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
