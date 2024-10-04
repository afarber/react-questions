import GamesContext from "../contexts/GamesContext";
import OptionsContext from "../contexts/OptionsContext";

const NoActiveGames = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { games, setGames } = useContext(GamesContext);

  return (
    <>
      <div>There are no active games</div>
      <button>Start new game</button>
      <div>hint 1</div>
      <div>hint 2</div>
      <div>hint 3</div>
    </>
  );
};

export default NoActiveGames;
