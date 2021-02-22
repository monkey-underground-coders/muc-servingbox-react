import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import useAction from "hooks/useAction";
import { authFetchingSelector } from "models/auth/selectors";
import { actions } from "models/auth/slice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.scss";
import Main from "./Main/Main";

const Home = () => {
  const getAccess = useAction(actions.getAccess);
  const fetching = useSelector(authFetchingSelector);

  useEffect(() => {
    getAccess();
  }, [getAccess]);

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.main}>
        <Header title="Уроки" />
        {!fetching && <Main />}
      </div>
    </div>
  );
};

export default Home;
