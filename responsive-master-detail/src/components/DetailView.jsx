import { useParams } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail View</h2>
      <p>Selected Page: {id}</p>
    </div>
  );
};

export default DetailView;
