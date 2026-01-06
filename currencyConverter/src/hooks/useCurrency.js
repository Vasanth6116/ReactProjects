import { useState, useEffect } from "react";
function useCurrency(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://2026-01-06.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}
export default useCurrency;
