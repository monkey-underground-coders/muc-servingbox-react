import React, { useState } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import getProperty from "lodash/get";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { getTableCols } from "./utils";

const LessonTable = ({ lessons, paginationData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(
    getProperty(paginationData, "size", 5)
  );
  const cols = getTableCols();
  if (!lessons.length) {
    return;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead></TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default LessonTable;
