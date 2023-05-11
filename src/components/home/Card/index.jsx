import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import colors from "@/config/colors";
import Typography from "@mui/material/Typography";

const customStyles = {
  card: {
    padding: "6px 10px 0 10px",
    maxWidth: 345,
    borderRadius: "16px",
    boxShadow:
      "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
  },
  cardContent: {
    display: "flex",
    flexGrow: "1",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
};

const Index = () => {
  return (
    <Card sx={customStyles.card}>
      <CardMedia
        sx={{ height: 200, borderRadius: "16px" }}
        image="/arch.png"
        title="green iguana"
      />
      <CardContent sx={customStyles.cardContent}>
        <Box>
          <Typography variant="body1" sx={{ color: colors.BODY_LIGHT }}>Jungle View</Typography>
          <Typography variant="h6" sx={{ color: colors.BODY_LIGHT }}>
            Newway Town
          </Typography>
          <Typography variant="h4" sx={{ color: colors.TEXT_HEADING_DARK }}>
            $3,500,000
          </Typography>
          <Typography variant="body2" sx={{ color: colors.NEAR_WHITE }}>
            By YX Properties
          </Typography>
        </Box>
        <Box>
          <Image src="./group.svg" height={25} width={25} alt="Ic" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Index;
