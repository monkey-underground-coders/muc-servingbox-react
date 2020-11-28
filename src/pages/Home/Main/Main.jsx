import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./Main.module.scss";
import { useSelector } from "react-redux";
import { refreshTokenSelector } from "models/auth/selectors";

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
  const refreshToken = useSelector(refreshTokenSelector);

  console.log(refreshToken);

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
      <div className={styles.cardsWrapper}>{renderedCards}</div>
    </>
  );
};

export default Main;
