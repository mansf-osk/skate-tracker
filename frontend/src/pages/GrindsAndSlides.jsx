import { useEffect, useState } from "react";
import FilterTable from "../components/FilterTable";
import { apiGetData } from "../api/ApiFunctions";

// Parent component for the Grinds and Slides page. Manages state for the data from the API.
function GrindsAndSlides() {
  const [grindAndSlideData, setGrindAndSlideData] = useState([]);

  const endpoint = "/v1/grinds-and-slides";

  // Calls the GET endpoint for grinds and slides and saves the returned data for display by the FilterTable component.
  useEffect(() => {
    apiGetData(endpoint)
      .then((data) => {
        setGrindAndSlideData(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error)
      })
  }, []);
  return (
    <>
      <h2>Tracked grinds and slides</h2>
      <FilterTable content={grindAndSlideData} type="tricks" />
    </>
  );
}

export default GrindsAndSlides;
