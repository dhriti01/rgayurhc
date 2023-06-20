"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "./SearchIcon";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import IconButton from "@mui/material/IconButton";

export default function BlogBanner(props) {
  return (
    <Box
      align="center"
      sx={{
        minHeight: "48.9vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: "5vh",
        pb: "5vh",
      }}
    >
      <Box>
        <Chip
          label="Our Blog"
          color="primary"
          className="bg-green-105 text-green-100 font-medium"
        />
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, marginBottom: 3, marginTop: 2 }}
          className="font-semibold"
        >
          Latest Blog Posts
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", lg: "justify" },
            textAlignLast: "center",
            mb: 5,
          }}
          className="text-black-107 font-normal"
        >
          Source for Health and Wellness: Discover Informative Blog Articles
        </Typography>

        <TextField
          id="search"
          placeholder="Search"
          className="bg-white"
          focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={props.onClear}>
                  <ClearRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),

            sx: { height: "48px", minWidth: "22.22vw" },
          }}
          sx={{
            border: 1,
            borderRadius: "8px",
            borderColor: "#FFF",
            fieldset: { borderColor: "#FFF" },
            input: {
              color: "#667085",
              fontSize: "16px",
              "&::placeholder": {
                // <----- Add this.
                color: "#667085",
                opacity: 1,
              },
            },
            "& .MuiInputBase-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#FFF",
              },
            },
          }}
          value={props.value}
          onChange={props.onSearch}
        />

        {/* <div className="search-bar">
          <IconButton aria-label="delete">
            <SearchIcon />
          </IconButton>
          <input
            name="search"
            onChange={props.onSearch}
            value={props.value}
            placeholder="Search"
          />
          <IconButton aria-label="delete" onClick={props.onClear}>
            <ClearRoundedIcon />
          </IconButton>
        </div> */}
      </Box>
    </Box>
  );
}
