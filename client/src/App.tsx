import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import List from "semantic-ui-react/dist/commonjs/elements/List";

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
      console.log(result);
    });
  }, []);

  return (
    <section>
      <Header as="h2" icon="users" content="Reactivities" />
      <ul>
        {activities.map((activity: ActivityType) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </ul>
    </section>
  );
}

export default App;
