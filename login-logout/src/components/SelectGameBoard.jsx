import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const SelectGameBoard = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);

  return (
    <>
      <div>Select a game board:</div>
      <button>Board 1</button>
      <button>Board 2</button>
      <button>Board 3</button>
      <button>Board 4</button>
    </>
  );
};

export default SelectGameBoard;
