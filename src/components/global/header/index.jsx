import { Avatar, Typography } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import styles from "./header.module.css";
import colors from "@/config/colors";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleRedirect = () => router.push("./");
  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundColor: colors.ALMOST_WHITE }}
    >
      <div className={styles.leftContainer} onClick={handleRedirect}>
        <Typography variant="h2">Metaprop</Typography>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.pageNameCont}>
          <Typography variant="body3">Home</Typography>
        </div>
        <div className={styles.avatarArea}>
          <Avatar alt="Remy Sharp" src="avatar.svg" />
        </div>
        <Typography variant="body3">Mike</Typography>
      </div>
    </div>
  );
};

export default Header;
