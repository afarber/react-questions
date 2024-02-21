"use client";

import PropTypes from "prop-types";

export default function MyButton({ label }) {
  return <button style={{ margin: "24px" }}>{label}</button>;
}

MyButton.propTypes = {
  label: PropTypes.string.isRequired,
};
