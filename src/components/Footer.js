"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Link1 from "next/link";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { makeStyles } from "@mui/styles";

import { mediumScreenFooter } from "./mediumScreenFooter";

const useStyles = makeStyles((theme) => ({
  summaryIcon: {
    color: "white", // Set your desired icon color here
  },
}));

export default function Footer() {
  const classes = useStyles();
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon
          className={classes.summaryIcon}
          sx={{ fontSize: "0.9rem" }}
        />
      }
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const smallScreenFooter = (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
        width: "100vw",
        position: "relative",
      }}
      style={{ left: `calc(-50vw + 50%)` }}
    >
      <Paper
        square
        elevation={0}
        display="flex"
        className="bg-green-100"
        align="center"
      >
        <Box display="flex" alignItems="center" sx={{ p: 5, pl: 3 }}>
          <Avatar
            sx={{
              height: 60,
              width: 65,
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            variant="rounded"
          >
            <Image src="/images/Logo.svg" alt="logo" fill />
          </Avatar>
          <Typography
            variant="h4"
            className="text-white font-bold font-proximaNova"
            align="left"
            sx={{ pl: 2 }}
          >
            RG Ayur Healthcare
          </Typography>
        </Box>
      </Paper>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="bg-green-100"
        sx={{ border: 0 }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="text-white font-semibold"
          sx={{ color: "#fff" }}
        >
          <Typography className="text-white font-semibold">
            Want to visit our clinic ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className="bg-green-100 text-white"
          sx={{ borderBottom: 1, borderTop: 0, pb: 4 }}
        >
          <Typography>
            Monday-Saturday {"\u00A0\u00A0\u00A0"} 5pm-8pm
          </Typography>
          <Typography>Sunday {"\u00A0\u00A0\u00A0"} 11am-2pm</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="bg-green-100"
        sx={{ border: 0 }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className="text-white font-semibold"
        >
          <Typography className="text-white font-semibold">
            Important Links
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className="bg-green-100 text-white"
          sx={{ borderBottom: 1, borderTop: 0, pb: 4 }}
        >
          <Link
            href="/blog"
            className="text-white font-semibold no-underline"
            component="div"
          >
            Blogs
          </Link>

          <Link
            href="#"
            className="text-white font-semibold no-underline"
            component="div"
          >
            Instagram
          </Link>

          <Link
            href="#"
            className="text-white font-semibold no-underline"
            component="div"
          >
            Facebook
          </Link>

          <Link1
            href="#getInTouch"
            className="text-white font-semibold no-underline"
            component="div"
            noWrap
          >
            Contact Us
          </Link1>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="bg-green-100"
        sx={{ border: 0 }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="text-white font-semibold">
            Reach out to us
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className="bg-green-100 text-white"
          sx={{ borderBottom: 1, borderTop: 0, pb: 4 }}
        >
          <Typography component="div" className="font-bold">
            rgayurhc@gmail.com
          </Typography>
          <Typography className="font-bold">Address:</Typography>

          <Typography>
            53, Phulkian Enclave, <br />
            Near Mini Secretariat, <br />
            Patiala, Punjab, India
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <>
      {mediumScreenFooter}
      {smallScreenFooter}
      <Box className="copyrightBox">
        <Typography
          variant="body1"
          component="div"
          sx={{ flexGrow: 1 }}
          className={`font-inter text-white font-normal`}
          align="center"
        >
          © 2001-2022, All Rights Reserved
        </Typography>
      </Box>
    </>
  );
}
