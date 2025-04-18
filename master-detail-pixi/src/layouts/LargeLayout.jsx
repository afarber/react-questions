import { Outlet } from "react-router";
import MasterList from "../components/MasterList";

export default function LargeLayout() {
  return (
    <div className="horizontalFlexContainer">
      <MasterList />
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}
