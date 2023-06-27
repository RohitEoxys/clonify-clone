import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Images from "../../Images/Images";
import Image from "next/image";
import { Icon } from "@mui/material";
import { TableDp } from "../../../assets/SVG/SVG";
import { makeStyles } from "@mui/styles";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const useStyles = makeStyles({
  table: {
    "& .MuiTableCell-root": {
      color: "#5F6368",
      fontWeight: "400",
      fontSize: "16px",
    },
  },
});

const rows = [
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
  createData("Cupcake", "Prototype", "Me", "Mar 15, 2023"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function ListView() {
  const styles = useStyles();

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
          className={styles.table}
        >
          <TableHead>
            <TableRow className="h-[63px]">
              <TableCell>Name</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Owner</TableCell>
              <TableCell align="right">
                Last Modified
                <IconButton aria-label="expand row" size="small">
                  <Image src={Images?.downArrowIcon} alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={index}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="flex items-center gap-[11px]"
                  >
                    <Icon component={TableDp} />
                    {row?.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="right">
                    {row?.carbs}
                    <IconButton aria-label="expand row" size="small">
                      <Image
                        src={Images?.menuIcon}
                        className="w-[15px] h-[15px]"
                        alt=""
                      ></Image>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
