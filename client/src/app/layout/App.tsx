import axios from "axios";
import { useEffect, useState } from "react";
import { Activity } from "../models/activity";
import { NavBar } from "./Navbar";
import { Container } from "semantic-ui-react";
import React from "react";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      const result = response.data;
      setActivities(result);
      console.log(result);
    });
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Container style={{ marginTop: "6rem" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </React.Fragment>
  );
}

export default App;
