import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 50,
  },
  title: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  type1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowWrap: "break-word",
  },
  button: {
    display: "flex",
    gap: 30,
    borderRadius: 20,
  },
}));
function Title(props: TitleTypes) {
  const {
    title = "Drive More Customers Through Digital",
    subTitle = "Chap fantastic skive off chancer knees up starkers easy peary up the kyber David, bleeding the BBC tomfoolery chimney.!",
    rytBtn = "Learn",
    leftBtn = "Get started",
    leftOnClick,
    rytOnClick,
  } = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h3" className={classes.type1}>
          {title}
        </Typography>
        <Typography>{subTitle}</Typography>
      </Box>
      <Box className={classes.button}>
        <Button variant="contained" color="primary" onClick={leftOnClick}>
          {leftBtn}
        </Button>
        <Button variant="contained" color="secondary" onClick={rytOnClick}>
          {rytBtn}
        </Button>
      </Box>
    </Box>
  );
}

export default Title;

type TitleTypes = {
  title?: string;
  subTitle?: string;
  leftBtn?: string;
  rytBtn?: string;
  leftOnClick?: () => void;
  rytOnClick?: () => void;
};
