import { useParams } from "react-router-dom";

const DetailView = () => {
  const { pageId } = useParams();

  console.log(pageId);

  return (
    <div>
      <h2>Detail View</h2>
      <p>Selected Page: {pageId}</p>
    </div>
  );
};

export default DetailView;
