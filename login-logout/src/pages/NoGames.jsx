import { useContext } from "react";
import { useNavigate } from "react-router";
import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const NoGames = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);

  const navigate = useNavigate();

  const addNewGame = (ev) => {
    // create a new game with random id
    const id = Math.floor(1 + Math.random() * 1000);
    const game = {
      id: id,
      title: `__GAME__ #${id}`,
    };

    // append the new game to the list of games
    setGames((prevGames) => [...prevGames, game]);

    // display the new game in PixiGame component
    navigate(`/game/${id}`);
  };

  return (
    <>
      <div>There are no active games</div>
      <button onClick={addNewGame}>__START_NEW_GAME__</button>
      <div>Hint 1</div>
      <div>Hint 2</div>
      <div>Hint 3</div>
    </>
  );
};

export default NoGames;
