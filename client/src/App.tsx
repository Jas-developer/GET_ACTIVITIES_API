import axios from "axios";
import { useEffect, useState } from "react";

type ActivityType = {
  id: string;
  title: string;
  description: string;
};

function App() {
  const [activities, setActivities] = useState<ActivityType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      const result = response.data;
      setActivities(result);
    });
  }, []);

  return (
    <section>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.description}</li>
        ))}
      </ul>
    </section>
  );
}

export default App;
