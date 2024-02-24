import React from "react";
import ActionBar from "./actionbar/ActionBar";
import { Box, Button, Link } from "@mui/material";

type Props = {};

const btnData = [
  { id: "1", label: "Home", url: "*" },
  { id: "2", label: "Product", url: "" },
  { id: "3", label: "About", url: "" },
  { id: "4", label: "Blog", url: "" },
  { id: "5", label: "Contact", url: "" },
];
const LeftComponent = (props) => {
  const { btnTitle = "Get Started" } = props;
  return (
    <Box display="flex" gap={3} alignItems="center">
      {btnData.map((btn) => {
        const { id, label, url } = btn;
        return (
          <Link key={id} href={url}>
            {label}
          </Link>
        );
      })}
      <Button variant="contained" color="primary">
        {btnTitle}
      </Button>
    </Box>
  );
};

function Card(props: Props) {
  return (
    <>
      <ActionBar
        RightComponent={<Box>Akhilesh</Box>}
        LeftComponent={<LeftComponent props={props} />}
      />
    </>
  );
}

export default Card;
