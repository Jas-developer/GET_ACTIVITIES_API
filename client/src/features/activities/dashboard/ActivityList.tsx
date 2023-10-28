import { Button, Item, Label, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/store/store";
import { observer } from "mobx-react-lite";

export const ActivityList = observer(() => {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;

  const [target, setTarget] = useState<string>("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <section>
      <Segment>
        <Item.Group divided>
          {activitiesByDate.map((activity) => (
            <Item key={activity.id}>
              <Item.Content key={activity.id}>
                <span className="font-semibold md:text-xl text-green-700">
                  {activity.title.toUpperCase()}
                </span>
                <Item.Meta>
                  <span className="text-black font-semibold">
                    {activity.date}
                  </span>
                </Item.Meta>
                <Item.Description>
                  <div className="text-gray-900 font-bold">
                    {activity.description}
                  </div>
                  <div className="font-medium text-blue-700">
                    {activity.city} - {activity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => activityStore.selectActivity(activity.id)}
                    floated="right"
                    content="View"
                    color="blue"
                  />
                  <Button
                    name={activity.id}
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                    floated="right"
                    content="Done"
                    color="green"
                    loading={loading && target === activity.id}
                  />
                  <Label basic content={activity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </section>
  );
});
