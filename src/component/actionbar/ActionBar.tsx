import { Box } from "@mui/material";
import React, { CSSProperties } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  box: {
    display: "flex",
  },
}));
function ActionBar(props: ActionBarTypes) {
  const { RightComponent, LeftComponent, MiddleComponent } = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {RightComponent && <Box className={classes.box}>{RightComponent}</Box>}
      {MiddleComponent && <Box className={classes.box}>{MiddleComponent}</Box>}
      {LeftComponent && <Box className={classes.box}>{LeftComponent}</Box>}
    </Box>
  );
}

export default ActionBar;

type ActionBarTypes = {
  RightComponent?: React.ReactNode;
  LeftComponent?: React.ReactNode;
  MiddleComponent?: React.ReactNode;
  containerStyles?: CSSProperties;
};
