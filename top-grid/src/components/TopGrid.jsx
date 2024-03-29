"use client";

import "./TopGrid.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const PHOTO_PATTERN = /^https:/i;
const JSON_URL =
  "https://raw.githubusercontent.com/afarber/react-questions/main/top-grid/public/top-data.json";

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

const columns = [
  {
    field: "elo",
    headerName: "Elo",
    type: "number",
  },
  {
    field: "given",
    headerName: "First name",
    width: 200,
  },
  {
    field: "photo",
    headerName: "Photo",
    align: "center",
    sortable: false,
    renderCell: (params) => <Avatar photo={params.row.photo} />,
  },
];

export default function TopGrid() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(JSON_URL)
      .then((response) => response.json())
      .then((json) => setRows(json.data));
  }, []);

  console.log(rows);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.uid}
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
