import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { useStore } from "../../../app/store/store";
import { observer } from "mobx-react-lite";

const InitialView = () => {
  return (
    <div className="flex px-4 py-2 justify-start flex-col gap-2 font-semibold text-teal-600">
      <span className="md:text-5xl text-xl font-bold text-gray-900">
        AGENDAPAL
      </span>
      <span className="font-semibold md:text-2xl ">
        Your trusty pal for managing your daily agenda.
      </span>
    </div>
  );
};

export const ActivityDashboard = observer(() => {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <section className="grid md:grid-cols-2 md:gap-[6rem]">
      <div className="order-2 md:order-1">
        <ActivityList />
      </div>
      {}
      <div
        className={`order-1 md:order-2 ${
          !editMode && !selectedActivity && "flex justify-start items-center"
        }`}
      >
        {selectedActivity && !editMode && <ActivityDetails />}
        {!selectedActivity && !editMode && <InitialView />}
        // {editMode && <ActivityForm />}
      </div>
    </section>
  );
});
