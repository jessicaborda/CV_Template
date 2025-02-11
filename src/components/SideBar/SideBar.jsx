import { Details } from "./Details";
import { Skills } from "./Skills";
import "./SideBar.css";
import { Education } from "./Education";

export const SideBar = () => {
  return (
    <>
      <div className="sideBarContainer">
        <Details />
        <Skills />
        <Education />
      </div>
    </>
  );
};
