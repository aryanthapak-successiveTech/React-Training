const { useState, useEffect } = require("react");

interface ApiConfigInterface{
  method?:"POST"|"GET"|"PUT"|"DELETE",
  body?:string,
  headers?:HeadersInit
}

const useFetchData = (fetchUrl:string, apiConfig?:ApiConfigInterface, initialError:string|false = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    try{if (initialError) {
      
      throw new Error(initialError);
    }}catch(err){
      setErrors(true);
    }
    
  },[]);
  const fetchData = async () => {
    try {
      setErrors(false);
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
