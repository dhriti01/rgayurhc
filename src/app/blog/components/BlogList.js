"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function BlogList(props) {
  //setupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  const moreBlogs = process.env.NEXT_PUBLIC_MORE_BLOG_URL;
  return (
    <>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={4}
        sx={{ marginBottom: 12 }}
      >
        {props.blogs.map((item) => (
          <Grid item key={item.title} xs={12} sm={6} md={4}>
            <Card align="center" className="blogCard">
              <CardActionArea href={item.link}>
                {/* <CardMedia
                component="img"
                image={`${item.img}`}
                alt=""
                sx={{
                  width: 0.875,
                  paddingTop: 3,
                  height: 0.5,
                }}
              /> */}
                <Box
                  className="bg-origin-content bg-center bg-no-repeat"
                  sx={{
                    mt: 3,
                    height: 300,
                    width: 0.875,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "100% auto",
                  }}
                />

                <CardContent
                  sx={{
                    p: 0,
                    width: 0.875,
                    paddingBottom: 3,
                  }}
                  align="left"
                >
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    className="font-semibold text-green-100"
                    sx={{ mb: 1.5, mt: 4 }}
                  >
                    {item.tag}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="font-semibold"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="text-black-108"
                    gutterBottom
                    sx={{ mb: 3 }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    className="text-black-109"
                  >
                    {`${item.date.toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box align="center" sx={{ marginBottom: 12 }}>
        <Button
          variant="outlined"
          className="bg-green-104 shadow-none rounded-lg border border-green-106 hover:border-green-100 hover:bg-green-104"
          href={moreBlogs}
          sx={{ pl: 4, pr: 4, pt: 1, pb: 1 }}
        >
          <Typography
            variant="subtitle1"
            sx={{ flexGrow: 1 }}
            className="text-green-100 font-semibold capitalize font-inter"
          >
            More Blogs
          </Typography>
          <ArrowOutwardIcon className="text-green-100" fontSize="small" />
        </Button>
      </Box>
    </>
  );
}
