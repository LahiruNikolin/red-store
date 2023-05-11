import React from "react";
import Card from "../Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const CardContainer = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "60px"}}>
      <Grid container rowSpacing={6} columnSpacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardContainer;
