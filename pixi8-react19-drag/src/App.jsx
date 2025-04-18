import PixiApp from "./PixiApp";
import { useMediaQuery } from "@react-hook/media-query";

const App = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  // TODO add layout and router

  return <PixiApp />;
};

export default App;
