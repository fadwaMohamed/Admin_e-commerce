import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

const AddButton = ({ text }) => {
  return (
    <Button color="secondary" variant="outlined" startIcon={<AddIcon />}>
      <Typography>{text}</Typography>
    </Button>
  );
};

export default AddButton;
