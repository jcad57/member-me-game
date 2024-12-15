import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../data/firebase";

const useFetchLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the top 10 leaderboard
    const fetchLeaderboard = async () => {
      try {
        // Get a reference to the 'leaderboard' collection
        const colRef = collection(db, "leaderboard");

        // Create a query to order by 'score' in descending order and limit the result to 10 documents
        const q = query(colRef, orderBy("score", "desc"), limit(10));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Map the documents to an array of objects
        const leaderboardData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLeaderboard(leaderboardData);
      } catch (err) {
        setError("Failed to fetch leaderboard: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return {
    leaderboard,
    isLoading,
    error,
  };
};

export default useFetchLeaderboard;
