import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { THEME_KEY, THEME_LIGHT, THEME_DARK } from "../Constants";
import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const MasterList = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);

  const navigate = useNavigate();
  const linkClassName = "link-" + options.theme;

  // sort games by their numerical ids
  const sortedGames = [...games].sort((game1, game2) => game1.id - game2.id);

  const addNewGame = (ev) => {
    setGames((prevState) => {
      const newGameId = Math.floor(1 + Math.random() * 1000);
      const newGameObj = {
        id: newGameId,
        title: `__GAME__ #${newGameId}`,
      };
      console.log("addNewGame", newGameObj);
      //navigate(`/game/${newGameId}`);
      navigate("/");
      return [...prevState, newGameObj];
    });
  };

  const toggleTheme = (ev) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [THEME_KEY]: ev.target.checked ? THEME_DARK : THEME_LIGHT,
    }));
  };

  return (
    <div className="left">
      <button onClick={addNewGame}>__START_NEW_GAME__</button>

      <nav>
        <ul>
          {sortedGames.map((game) => (
            <li key={game.id}>
              <NavLink className={linkClassName} to={"/game/" + game.id}>
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
            checked={options[THEME_KEY] === THEME_DARK}
            onChange={toggleTheme}
          />
          __USE_DARK_THEME__
        </label>
      </div>
    </div>
  );
};

export default MasterList;
