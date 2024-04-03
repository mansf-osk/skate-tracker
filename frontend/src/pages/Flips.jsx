import { useEffect, useState } from "react";
import FilterTable from "../components/FilterTable";
import { apiGetData } from "../api/ApiFunctions";

function Flips() {
  const [flipData, setFlipData] = useState([])

  const endpoint = "/v1/flips";
  const options = {
    method: "GET"
  };

  useEffect(() => {
    apiGetData(endpoint, options)
      .then((data) => {
        setFlipData(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })
  }, []);
  return <FilterTable content={flipData} type="tricks" />;
}

export default Flips;
