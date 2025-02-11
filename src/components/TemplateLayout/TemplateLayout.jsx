import { SideBar } from "../SideBar";
import { Content } from "../Content";
import "./TemplateLayout.css";

export const TemplateLayout = () => {
  return (
    <>
      <div className="template-container">
        <SideBar />
        <Content />
      </div>
    </>
  );
};
