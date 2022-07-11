import "./Results.css";

const Today = () => {
  return (
    <div>
      <h2>Today</h2>
      <p>description</p>
    </div>
  );
};

const Tomorrow = () => {
  return (
    <>
      <h2>In Two Days</h2>
      <p>description</p>
    </>
  );
};

const Yesterday = () => {
  return (
    <>
      <h2>In Three Days</h2>
      <p>description</p>
    </>
  );
};

export function Results() {
  return (
    <>
      <section className="results-container">
        <div className="day">
          <Today />
        </div>
        <div className="day">
          <Tomorrow />
        </div>
        <div className="day">
          <Yesterday />
        </div>
      </section>
    </>
  );
}
