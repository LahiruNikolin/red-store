import React from "react";
import Card from "../Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useHouses from "../../../hooks/useHouses";
const CardContainer = () => {
  const { movies } = useHouses();

  return (
    <Box sx={{ flexGrow: 1, paddingTop: "60px" }}>
      <Grid container rowSpacing={6} columnSpacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContainer;
