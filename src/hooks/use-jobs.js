import axios from "axios";
import { useDebugValue, useEffect, useState } from "react";

export default function useJobs(id) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = id
    ? `${import.meta.env.VITE_BASE_JOBS}/${id}`
    : `${import.meta.env.VITE_BASE_JOBS}`;

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        const data = res.data;
        setJobs(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, [url]);

  useDebugValue(jobs);

  return { jobs, loading };
}
