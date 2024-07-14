import { useEffect, useState } from "react";
import { notifyError } from "./services/NotificationService";
import { get } from "./services/ApiService";

import { themeChange } from 'theme-change'



function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    themeChange(false)
  }, [])

  useEffect(() => {

    const fetchData = async () => {
      const errorMessage = "Error fetching character";
      const responseData = await get("/character/1", errorMessage);
      
      if (responseData) {
        setData(responseData);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="App">
      <button className="btn" onClick={() => notifyError("Yeah")}>Button</button>
      {
        data &&
        <p>{data.name}</p>
      }
    </div>
  );
}

export default App;
