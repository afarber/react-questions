import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const SelectGameBoard = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);

  const navigate = useNavigate();

  const addNewGame = (ev) => {
    const board = ev.target.value;
    // create a new game with random id
    const id = Math.floor(1 + Math.random() * 1000);
    const game = {
      id: id,
      title: `__GAME__ #${id}`,
      board: board,
    };

    // append the new game to the list of games
    setGames((prevGames) => [...prevGames, game]);

    // display the new game in PixiGame component
    navigate(`/game/${id}`);
  };

  const backToHome = (ev) => {
    navigate("/");
  };

  return (
    <>
      <div>
        <div>Select a game board:</div>
        <div>
          <button onClick={addNewGame} value={1}>
            Board 1
          </button>
        </div>
        <div>
          <button onClick={addNewGame} value={2}>
            Board 2
          </button>
        </div>
        <div>
          <button onClick={addNewGame} value={3}>
            Board 3
          </button>
        </div>
        <div>
          <button onClick={addNewGame} value={4}>
            Board 4
          </button>
        </div>
      </div>
      <hr />
      <div>
        <button onClick={backToHome}>Cancel</button>
      </div>
    </>
  );
};

export default SelectGameBoard;
