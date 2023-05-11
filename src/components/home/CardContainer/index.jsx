import React from "react";
import Card from "../Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useHouses from "../../../hooks/useHouses";
import CircularProgress from "@mui/material/CircularProgress";

const CardContainer = () => {
  const { loading, movies } = useHouses();

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          height: "70vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box sx={{ flexGrow: 1, paddingTop: "60px" }}>
      <Grid container rowSpacing={6} columnSpacing={2}>
        {movies.map((movie) => (
          <Grid key={movie.id} item xs={12} md={6} lg={4}>
            <Card movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContainer;
