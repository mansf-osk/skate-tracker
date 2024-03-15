import FilterTable from "../components/FilterTable";

const DATA = [
  { category: "Grind", price: "hard", stocked: false, name: "Smith" },
  { category: "Grind", price: "medium", stocked: true, name: "Nosegrind" },
  { category: "Grind", price: "easy", stocked: true, name: "50-50" },
  { category: "Slide", price: "hard", stocked: false, name: "Noseblunt" },
  { category: "Slide", price: "easy", stocked: true, name: "Boardslide" },
  { category: "Grind", price: "easy", stocked: true, name: "Five-O" },
];

function GrindsAndSlides() {
  return <FilterTable products={DATA} />;
}

export default GrindsAndSlides;
