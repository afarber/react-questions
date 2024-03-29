"use client";

import "./TopTable.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PHOTO_PATTERN = /^https:/i;
const JSON_URL =
  "https://raw.githubusercontent.com/afarber/react-questions/main/top-table/public/top-data.json";

function Avatar({ photo }) {
  const wrongImgHandler = (photo) => {
    return photo && PHOTO_PATTERN.test(photo) ? photo : "female_sad.png";
  };

  const imgErrorHandler = ({ currentTarget }) => {
    // prevents looping
    currentTarget.onerror = null;
    currentTarget.src = "male_sad.png";
  };

  return (
    <img
      src={wrongImgHandler(photo)}
      className="avatar"
      onError={imgErrorHandler}
    />
  );
}

Avatar.propTypes = {
  photo: PropTypes.string.isRequired,
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

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
          <Avatar photo={row.photo} />
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

export default function TopTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(JSON_URL)
      .then((response) => response.json())
      .then((json) => setRows(json.data));
  }, []);

  console.log(rows);

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
          {rows && rows.map((row) => <Row key={row.uid} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
