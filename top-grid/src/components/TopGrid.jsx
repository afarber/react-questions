"use client";

import "./TopGrid.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";

const PHOTO_PATTERN = /^https:/i;
const JSON_URL =
  "https://raw.githubusercontent.com/afarber/react-questions/main/top-grid/public/top-data.json";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const wrongImgHandler = (photo) => {
    return photo && PHOTO_PATTERN.test(photo) ? photo : "female_sad.png";
  };

  const imgErrorHandler = ({ currentTarget }) => {
    // prevents looping
    currentTarget.onerror = null;
    currentTarget.src = "male_sad.png";
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.elo}
        </TableCell>
        <TableCell align="right">{row.given}</TableCell>
        <TableCell align="center">
          <img
            src={wrongImgHandler(row.photo)}
            className="avatar"
            onError={imgErrorHandler}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small" sx={{ margin: 1 }} border="1">
              <TableBody>
                <TableRow>
                  <TableCell>Average score:</TableCell>
                  <TableCell>{row.avg_score}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Average time:</TableCell>
                  <TableCell>{row.avg_time}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    uid: PropTypes.number.isRequired,
    elo: PropTypes.number.isRequired,
    given: PropTypes.string.isRequired,
    photo: PropTypes.string,
    motto: PropTypes.string,
    avg_time: PropTypes.string.isRequired,
    avg_score: PropTypes.number.isRequired,
  }).isRequired,
};

export function TopTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(JSON_URL)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data));
  }, []);

  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table border="1">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Elo</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => <Row key={row.uid} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function TopGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(JSON_URL)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data));
  }, []);

  console.log(data);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
