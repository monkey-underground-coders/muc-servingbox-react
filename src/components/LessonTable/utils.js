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
