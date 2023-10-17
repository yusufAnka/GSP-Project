import { useEffect, useState } from "react";
import { COMMENTS, PHOTOS, POSTS, USERS } from "../utils/constants";
import {
  fetchComments,
  fetchPhotos,
  fetchPosts,
  fetchUsers,
} from "../utils/api";

const useFetch = (itemToFetch) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFn = () => {
    switch (itemToFetch) {
      case POSTS:
        return fetchPosts;
      case USERS:
        return fetchUsers;
      case PHOTOS:
        return fetchPhotos;
      case COMMENTS:
        return fetchComments;
      default:
        break;
    }
  };

  const fetchData = fetchFn();

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
        setLoading(false); // I have Set loading to false once data is loaded
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); //I Set loading to false in case of an error
        setError(`An error occurred: ${error.message}`);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, loading, error };
};

export default useFetch;
