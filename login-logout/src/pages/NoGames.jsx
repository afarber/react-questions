import { useContext } from "react";
import { useNavigate } from "react-router";
import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const NoGames = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);
  const navigate = useNavigate();

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
