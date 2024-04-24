import { useParams } from "react-router-dom";

const DetailView = () => {
  const { pageId } = useParams();

  return (
    <>
      <h3>Detail View</h3>
      <p>Selected Page: {pageId}</p>
    </>
  );
};

export default DetailView;
