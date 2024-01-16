"use client";

import "./TopTable.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PHOTO_PATTERN = /^https:/i;
const JSON_URL =
  "https://raw.githubusercontent.com/afarber/react-questions/main/top-list/public/top-data.json";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const imgErrorHandler = ({ currentTarget }) => {
    // prevents looping
    currentTarget.onerror = null;
    currentTarget.src = "male_sad.png";
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.elo}
        </TableCell>
        <TableCell align="right">{row.given}</TableCell>
        <TableCell align="center">
          {row.photo && PHOTO_PATTERN.test(row.photo) && (
            <img src={row.photo} className="avatar" onError={imgErrorHandler} />
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Stats
              </Typography>
              <Table size="small" aria-label="player stats" border="1">
                <TableHead>
                  <TableRow>
                    <TableCell>Average score</TableCell>
                    <TableCell>{row.avg_score}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Average time</TableCell>
                    <TableCell>{row.avg_time}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </Box>
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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(JSON_URL)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data));
  }, []);

  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" border="1">
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
