import { useContext } from "react";
import { useNavigate } from "react-router";
import OptionsContext from "../contexts/OptionsContext";

const NoGames = () => {
  const { options, setOptions } = useContext(OptionsContext);

  const navigate = useNavigate();

  const selectGameBoard = (ev) => {
    navigate("/new");
  };

  return (
    <>
      <div>There are no active games</div>
      <button onClick={selectGameBoard}>__START_NEW_GAME__</button>
      <div>Hint 1</div>
      <div>Hint 2</div>
      <div>Hint 3</div>
    </>
  );
};

export default NoGames;
