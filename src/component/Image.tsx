import { Box } from "@mui/material";
import React from "react";

type Props = {
  image: string;
  width?: number | string;
  height?: number | string;
};

function Image(props: Props) {
  const { image, width = 100, height = 100 } = props;
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <img src={image} alt="img" width={width} height={height} />
    </Box>
  );
}

export default Image;
