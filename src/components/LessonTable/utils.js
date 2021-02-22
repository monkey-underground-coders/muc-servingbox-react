export const getTableCols = (role) => {
  const lessonTableCols = [
    {
      id: "status",
      numeric: false,
      disablePadding: true,
      label: "Статус",
    },
    {
      id: "startAt",
      numeric: false,
      disablePadding: false,
      label: "Начало урока",
    },
    { id: "endAt", numeric: true, disablePadding: false, label: "Конец урока" },
    { id: "title", numeric: true, disablePadding: false, label: "Шаблон" },
    {
      id: "connectedUsers",
      numeric: true,
      disablePadding: false,
      label: "Урок",
    },
  ];
  return lessonTableCols;
};

export const tableHeadData = [
  { id: 0, title: "Статус", align: "left" },
  { id: 1, title: "Дата", align: "left" },
  { id: 2, title: "Время", align: "left" },
  { id: 3, title: "Шаблон", align: "left" },
  { id: 4, title: "Название", align: "left" },
  { id: 5, title: "Количество учеников", align: "right" },
];
