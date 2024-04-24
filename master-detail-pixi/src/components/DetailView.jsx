import { useParams } from "react-router-dom";

const DetailView = () => {
  const { pixiBunnies } = useParams();

  return (
    <div style={{ background: "lightyellow" }}>
      <p>Show game with so many bunnies: {pixiBunnies}</p>
    </div>
  );
};

export default DetailView;
