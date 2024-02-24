import Title from "component/Title";
import "./App.css";
import Card from "./component/Card";
import { Box } from "@mui/material";
import Image from "component/Image";

function App() {
  const image =
    "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <Box
      display="flex"
      flex={1}
      bgcolor="lightgrey"
      width="100wh"
      height="100vh"
      flexDirection="column"
      overflow="auto"
      gap={2.5}
    >
      <Card />
      <Title />
      <Image image={image} width={600} height={500} />
    </Box>
  );
}

export default App;
