import { useParams } from "react-router-dom";

const DetailView = () => {
  const { pageId } = useParams();

  return (
    <div style={{ background: "#ccf" }}>
      <h3>Detail View</h3>
      <p>Selected Page: {pageId}</p>
    </div>
  );
};

export default DetailView;
