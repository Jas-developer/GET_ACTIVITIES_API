import { useEffect } from "react";
import { NavBar } from "./Navbar";
import { Container } from "semantic-ui-react";
import React from "react";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import { LoadingComponent } from "./LoadingComponent";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";

function App() {
  // mobx
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  //delete

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading.." />;

  return (
    <React.Fragment>
      <NavBar />
      <Container style={{ marginTop: "6rem" }}>
        <ActivityDashboard />
      </Container>
    </React.Fragment>
  );
}

export default observer(App);
