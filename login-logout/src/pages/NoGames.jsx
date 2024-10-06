import { useContext } from "react";
import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const NoGames = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);

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
    <>
      <div>There are no games</div>
      <button onClick={addNewGame}>__START_NEW_GAME__</button>
      <div>hint 1</div>
      <div>hint 2</div>
      <div>hint 3</div>
    </>
  );
};

export default NoGames;
