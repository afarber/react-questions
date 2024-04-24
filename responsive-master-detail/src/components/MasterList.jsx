import { Link } from "react-router-dom";

const MasterList = () => {
  const pages = [
    { id: 1, title: "Page 1" },
    { id: 2, title: "Page 2" },
    { id: 3, title: "Page 3" },
    { id: 4, title: "Page 4" },
  ];

  return (
    <div style={{ background: "lightblue" }}>
      <h3>Master List</h3>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <Link to={"/page/" + page.id}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MasterList;
