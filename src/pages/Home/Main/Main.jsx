import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  const renderedCards = cardsInfo.map((info) => (
    <Card>
      <CardContent>
        <Typography>{info.title}</Typography>
        <Typography>{info.subTitle}</Typography>
        <Typography>{info.date}</Typography>
      </CardContent>
      <CardActions>
        <Button>Войти</Button>
      </CardActions>
    </Card>
  ));

  return <div>{renderedCards}</div>;
};

export default Main;
