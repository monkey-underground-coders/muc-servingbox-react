import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
// import getProperty from "lodash/get";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { tableHeadData } from "./utils";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./LessonTable.module.scss";
import LessonTableItem from "./LessonTableItem";
import TablePagination from "@material-ui/core/TablePagination";

const LessonTable = ({ lessons, paginationData }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const [rowsPerPage, setRowsPerPage] = useState(
  //   getProperty(paginationData, "size", 5)
  // );

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Toolbar>
        <Typography
          variant="h5"
          color="primary"
          className={styles.tableHeadtitle}
        >
          Все уроки
        </Typography>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeadData.map((item) => (
                <TableCell key={item.id} align={item.align}>
                  {item.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <LessonTableItem />
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={lessons.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default LessonTable;
