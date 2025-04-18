import { Link, useParams } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import PixiApp from "./PixiApp";

const DetailView = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const { pixiBunnies } = useParams();

  return (
    <div className="verticalFlexContainer">
      <div className="hint">Game #{pixiBunnies} Score1:Score2</div>

      <PixiApp />

      <div className="status">A game hint to do this and that...</div>
      {isSmallScreen && (
        <div>
          <Link to="/">Back to Games List</Link>
        </div>
      )}
    </div>
  );
};

export default DetailView;
