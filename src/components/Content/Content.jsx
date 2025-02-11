import "./Content.css";
import { Portfolio } from "./Portfolio";
import { Experience } from "./Experience";

export const Content = () => {
  return (
    <>
      <div className="content-container">
        <div className="content-title">
          <h1>Jessica Borda</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="content-body">
          <Experience />
          <Portfolio />
        </div>
      </div>
    </>
  );
};
