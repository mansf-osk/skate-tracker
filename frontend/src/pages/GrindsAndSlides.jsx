import FilterTable from "../components/FilterTable";

const DATA = [
  {
    difficulty: "hard",
    learned: false,
    name: "Smith",
    clip: "https://www.youtube.com/embed/QxhxjUKvpv0",
  },
  {
    difficulty: "medium",
    learned: true,
    name: "Nosegrind",
    clip: "https://www.youtube.com/embed/QxhxjUKvpv0",
  },
  { difficulty: "easy", learned: true, name: "50-50" },
  { difficulty: "easy", learned: true, name: "Five-O" },
  { difficulty: "hard", learned: false, name: "Noseblunt" },
  { difficulty: "easy", learned: true, name: "Boardslide" },
];

function GrindsAndSlides() {
  return <FilterTable content={DATA} type="tricks" />;
}

export default GrindsAndSlides;
