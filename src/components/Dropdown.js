import "./Dropdown.css";
export function Dropdown() {
  const zodiacNames = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const names = zodiacNames.map((name) => {
    return (
      <option className="option" value={name}>
        {name}
      </option>
    );
  });
  return (
    <>
      <form>
        <label for="zodiac-signs">Choose your sign:</label>
        <select className="select" name="zodiac-signs" id="zodiac-signs">
          {names}
        </select>
      </form>
    </>
  );
}
