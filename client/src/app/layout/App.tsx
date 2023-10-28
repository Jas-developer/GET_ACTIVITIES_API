import { useEffect, useState } from "react";
import { Activity } from "../models/activity";
import { NavBar } from "./Navbar";
import { Container } from "semantic-ui-react";
import React from "react";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import { agent } from "../api/agent";
import { LoadingComponent } from "./LoadingComponent";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";

function App() {
  // mobx
  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);

  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  const handleCreateOrEditActivity = (activity: Activity) => {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activities.filter((x) => x.id !== activity.id),
          activity,
        ]);

        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      activity.id = uuid();
      setEditMode(false);
      setSubmitting(false);
      setSelectedActivity(activity);
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
      });
    }
  };

  //delete
  const handleDeleteActivity = (id: string) => {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((x) => x.id !== id)]);
      setSubmitting(false);
    });
  };

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading.." />;

  return (
    <React.Fragment>
      <NavBar />
      <Container style={{ marginTop: "6rem" }}>
        <ActivityDashboard
          activities={activityStore.activities}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>
    </React.Fragment>
  );
}

export default observer(App);
