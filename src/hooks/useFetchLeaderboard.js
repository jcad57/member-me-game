import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../data/firebase";

const useFetchLeaderboard = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
      const newData = [];
      snapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
      });
      setData(newData);
    });

    return unsubscribe; // Cleanup subscription
  }, [collectionName]);

  return data;
};

export default useFetchLeaderboard;
