import { NavLink } from "react-router-dom";

const MasterList = () => {
  const games = [
    { id: 1, title: "Game 1" },
    { id: 2, title: "Game 2" },
    { id: 3, title: "Game 3" },
    { id: 4, title: "Game 4" },
  ];

  return (
    <div style={{ background: "lightblue" }}>
      <h3>Master List</h3>
      <nav>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <NavLink to={"/game/" + game.id}>{game.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MasterList;
