const url = "http://localhost:4000"

export async function apiGetData(endpoint, options) {
  const apiUrl = url + endpoint;
  console.log("Initiating API-call to: \n", apiUrl);

  return fetch(apiUrl, options)
    .then((response) => {
      if (response.ok) {
        console.log(`API call to '${options.method} ${endpoint}' successful`);
        return response.json();
      } else {
        console.log(`Error during API call to '${options.method} ${endpoint}'`);
      };
    });
}

