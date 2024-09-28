import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Login from "../pages/Login";
import GamesContext from "../contexts/GamesContext";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";

const MasterList = () => {
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { games, setGames } = useContext(GamesContext);

  // sort games by their numerical ids
  const sortedGames = [...games].sort((game1, game2) => game1.id - game2.id);

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
      {user ? (
        <>
          <button onClick={addNewGame}>Start new game</button>
          <nav>
            <ul>
              {sortedGames.map((game) => (
                <li key={game.id}>
                  <NavLink to={"/game/" + game.id}>{game.title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : (
        <Login />
      )}
      <div>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(ev) => {
              setTheme(ev.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
      </div>
    </div>
  );
};

export default MasterList;
