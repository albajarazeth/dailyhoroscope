import "./Main.css";
import { Dropdown } from "./Dropdown";

export function Main() {
  return (
    <>
      <section className="section">
        <div className="intro">
          <h1>Horoscopes</h1>
          <p className="p-intro">
            Get a forcast of your days, based on the position of the stars and
            planets at a specific point in time.
          </p>
        </div>
        <div className="drop-container">
          <Dropdown />
        </div>
        <div>
          <p style={{ fontSize: "10px" }}>What is my zodiac sign?</p>
        </div>
      </section>
    </>
  );
}
