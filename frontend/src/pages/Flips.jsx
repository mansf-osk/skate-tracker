import { useEffect, useState } from "react";
import FilterTable from "../components/FilterTable";
import { apiGetData } from "../api/ApiFunctions";

// Parent component for the Flip Tricks page. Manages state for the data from the API.
function Flips() {
  const [flipData, setFlipData] = useState([])

  const endpoint = "/v1/flips";

  // Calls the GET endpoint for flips and saves the returned data for display by the FilterTable component.
  useEffect(() => {
    apiGetData(endpoint)
      .then((data) => {
        setFlipData(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
  }, []);
  return (
    <>
      <h2>Tracked flip tricks</h2>
      <FilterTable content={flipData} type="tricks" />
    </>
  );
};

export default Flips;
