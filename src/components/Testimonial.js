"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

import { testimonials } from "@/data/testimonials";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Testimonial() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Grid container className="happyPatientBox">
        <Grid
          item
          xs={12}
          md={5}
          className="happyPatient"
          sx={{
            height: { xs: 0.4, md: 1 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xs: 0.8, md: 0.63 } }}>
            <Typography
              variant="h3"
              className="text-white font-extrabold"
              sx={{ marginBottom: 1.5 }}
            >
              Happy patients
            </Typography>
            <Typography variant="H7" className="text-white font-normal">
              Feedback from these happy customers helps us in reaching the
              heights
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          className="testimonial"
          sx={{
            display: "flex",
            alignItems: { md: "center" },
            justify: { md: "center" },
            height: { xs: 0.6, md: 1 },
          }}
        >
          <Box
            className="testimonialBox"
            sx={{
              height: { sx: 1, md: 9 / 10 },
              flexGrow: 1,
              paddingLeft: 5,
              paddingRight: 5,
              marginRight: { md: "14vw" },
            }}
          >
            <Box
              sx={{
                height: 4 / 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Image
                  src="/images/Quotes.svg"
                  align="right"
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="quoteImg"
                />
              </Box>

              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={6000}
                sx={{ height: "100%" }}
              >
                {testimonials.map((step, index) => (
                  <div key={step.name}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box>
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{ marginBottom: 3 }}
                        >
                          <Avatar
                            className="testimonialAvatar"
                            sx={{ width: 50, height: 50 }}
                          >
                            {testimonials[activeStep].name[0]}
                          </Avatar>
                          <Box>
                            <Typography
                              variant="H7"
                              component="div"
                              sx={{ flexGrow: 1 }}
                              className={`font-inter text-black-104 font-bold`}
                            >
                              {testimonials[activeStep].name}
                            </Typography>
                            <Typography
                              variant="body2"
                              component="div"
                              sx={{ flexGrow: 1 }}
                              className={`font-inter text-black-104 font-normal`}
                            >
                              {testimonials[activeStep].designation}
                            </Typography>
                          </Box>
                        </Stack>

                        {testimonials[activeStep].feedback}
                      </Box>
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>

              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <IconButton
                    size="large"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                    className="navigatorButton"
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </IconButton>
                }
                backButton={
                  <IconButton
                    size="large"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className="navigatorButton"
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </IconButton>
                }
                sx={{ justify: "flex-end" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
