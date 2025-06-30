const { useState } = require("react");

const useFetchData = (fetchUrl, apiConfig) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(fetchUrl, apiConfig);
      const parsedData = await res.json();

      if (!res.ok) {
        setErrors(true);
        return;
      }
      setData(parsedData);
    } catch (err) {
      setErrors(true);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, errors, fetchData };
};

export default useFetchData;
