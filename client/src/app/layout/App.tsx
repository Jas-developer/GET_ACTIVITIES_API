import { useEffect } from "react";
import { NavBar } from "./Navbar";
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
      <section className="md:px-20 mt-2 md:mt-5">
        <ActivityDashboard />
      </section>
    </React.Fragment>
  );
}

export default observer(App);
