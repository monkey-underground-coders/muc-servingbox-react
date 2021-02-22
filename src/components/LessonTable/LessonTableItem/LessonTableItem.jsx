import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import styles from "./LessonTableItem.module.scss";

const LessonTableItem = ({ state }) => {
  return (
    <TableRow hover>
      <TableCell scope="row">
        <Typography className={styles.itemState}>Запланировано</Typography>
      </TableCell>
      <TableCell align="left">zdzg</TableCell>
      <TableCell align="left">drgxdrg</TableCell>
      <TableCell align="left">rxdrg</TableCell>
      <TableCell align="left">xdrgxdrg</TableCell>
      <TableCell align="right">0</TableCell>
    </TableRow>
  );
};

export default LessonTableItem;
