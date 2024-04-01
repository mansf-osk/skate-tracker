import FilterTable from "../components/FilterTable";

const DATA = [
  { category: "Fruits", difficulty: "$1", learned: true, name: "Apple" },
  { category: "Fruits", difficulty: "$1", learned: true, name: "Dragonfruit" },
  {
    category: "Fruits",
    difficulty: "$2",
    learned: false,
    name: "Passionfruit",
  },
  { category: "Vegetables", difficulty: "$2", learned: true, name: "Spinach" },
  { category: "Vegetables", difficulty: "$4", learned: false, name: "Pumpkin" },
  { category: "Vegetables", difficulty: "$1", learned: true, name: "Peas" },
];

function Flips() {
  return <FilterTable content={DATA} type="tricks" />;
}

export default Flips;
