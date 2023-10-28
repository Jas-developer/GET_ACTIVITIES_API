import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { useStore } from "../../../app/store/store";
import { observer } from "mobx-react-lite";

interface Props {
  activities: Activity[];

  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export const ActivityDashboard = observer(
  ({
    activities,

    deleteActivity,
    submitting,
  }: Props) => {
    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    return (
      <Grid>
        <Grid.Column width="10">
          <ActivityList
            deleteActivity={deleteActivity}
            activities={activities}
            submitting={submitting}
          />
        </Grid.Column>
        <Grid.Column width="6">
          {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />}
        </Grid.Column>
      </Grid>
    );
  }
);
