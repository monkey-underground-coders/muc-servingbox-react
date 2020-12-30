import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./Main.module.scss";
import { useSelector } from "react-redux";
import { refreshTokenSelector } from "models/auth/selectors";
import { actions } from "models/live_lessons/slice";
import useAction from "hooks/useAction";
import { liveLessonsEntitiesSelector } from "models/live_lessons/selectors";
import { Helmet } from "react-helmet-async";

const cardsInfo = [
  {
    title: 'Самостоятельная работа по теме "Циклы". For и while',
    subTitle: "Работа для первой подгруппы",
    date: "31 января",
  },
  {
    title: 'Самостоятельная работа по теме "Циклы". For и while',
    subTitle: "Работа для первой подгруппы",
    date: "31 января",
  },
  {
    title: 'Самостоятельная работа по теме "Циклы". For и while',
    subTitle: "Работа для первой подгруппы",
    date: "31 января",
  },
];

const Main = () => {
  const fetchAllLiveLessons = useAction(actions.liveLessonsPageRequest);
  const liveLessons = useSelector(liveLessonsEntitiesSelector);
  console.log(liveLessons);
  useEffect(() => {
    fetchAllLiveLessons();
  }, [fetchAllLiveLessons]);
  const renderedCards = cardsInfo.map((info) => (
    <div className={styles.cardWrapper}>
      <Card className={styles.card}>
        <CardContent>
          <Typography>{info.title}</Typography>
          <Typography>{info.subTitle}</Typography>
          <Typography>{info.date}</Typography>
        </CardContent>
        <CardActions>
          <Button>Войти</Button>
        </CardActions>
      </Card>
    </div>
  ));

  return (
    <>
      <Helmet title="Уроки" />
      <div className={styles.cardsWrapper}>{renderedCards}</div>
    </>
  );
};

export default Main;
