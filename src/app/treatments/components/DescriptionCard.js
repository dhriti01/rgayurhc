"use client";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function DescriptionCard(props) {
  return (
    <Grid item xs={12} md={7.3} sx={{ pb: { md: 7 } }}>
      <Typography
        variant="H4p5"
        component="div"
        sx={{ flexGrow: 1, pt: { md: 3 }, pb: { md: 1.5 } }}
        className="font-semibold"
      >
        {props.item.title}
      </Typography>
      {props.item.content.map((item1, idx1) => (
        <List
          key={idx1}
          sx={{
            listStyleType: "disc",
            pl: 4,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem disablePadding>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  className={`font-inter text-black-107`}
                >
                  {item1}
                </Typography>
              }
            />
          </ListItem>
        </List>
      ))}
    </Grid>
  );
}
