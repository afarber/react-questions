import { useContext } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../MyContext";

const MasterList = () => {
  const { games, setGames } = useContext(MyContext);

  const addNewGame = () => {
    const newGame = {
      id: Math.floor(Math.random() * 1000), // Generate a random integer id
      title: `Game ${games.length + 1}`, // Set a default title
    };
    setGames([...games, newGame]);
  };

  /*
  const games = [
    { id: 1, title: "Game 1" },
    { id: 2, title: "Game 2" },
    { id: 3, title: "Game 3" },
    { id: 4, title: "Game 4" },
  ];
*/

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
