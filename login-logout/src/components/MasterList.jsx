import { useContext } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../MyContext";

const MasterList = () => {
  const { games, setGames } = useContext(MyContext);

  const addNewGame = () => {
    setGames((prevState) => {
      const id = Math.floor(Math.random() * 1000);
      const newGame = {
        id: id,
        title: `Game ${id}`,
      };
      return [...prevState, newGame];
    });
  };

  return (
    <div className="left">
      <button onClick={addNewGame}>Start new game</button>
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
