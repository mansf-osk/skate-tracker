import { useEffect, useState } from "react";
import FilterTable from "../components/FilterTable";
import { apiGetData } from "../api/ApiFunctions";

function GrindsAndSlides() {
  const [grindAndSlideData, setGrindAndSlideData] = useState([]);

  const endpoint = "/v1/grinds-and-slides";
  const options = {
    method: "GET"
  };

  useEffect(() => {
    apiGetData(endpoint, options)
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
