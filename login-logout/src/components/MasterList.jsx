import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const MasterList = () => {
  const { theme, setTheme } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);

  const navLinkClassName = "navlink-" + theme;

  // sort games by their numerical ids
  const sortedGames = [...games].sort((game1, game2) => game1.id - game2.id);

  const addNewGame = () => {
    setGames((prevState) => {
      const id = Math.floor(1 + Math.random() * 1000);
      const newGame = {
        id: id,
        title: `__GAME__ #${id}`,
      };
      return [...prevState, newGame];
    });
  };

  return (
    <div className="left">
      <button onClick={addNewGame}>__START_NEW_GAME__</button>

      <nav>
        <ul>
          {sortedGames.map((game) => (
            <li key={game.id}>
              <NavLink className={navLinkClassName} to={"/game/" + game.id}>
                {game.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(ev) => {
              setTheme(ev.target.checked ? "dark" : "light");
            }}
          />
          __USE_DARK_THEME__
        </label>
      </div>
    </div>
  );
};

export default MasterList;
