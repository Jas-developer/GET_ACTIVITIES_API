import Logo from "../../assets/logo.png";
import { useStore } from "../store/store";

const NavBar = () => {
  const { activityStore } = useStore();

  return (
    <header className="flex md:py-4 flex-row gap-5 md:gap-8 justify-center md:justify-start items-center bg-teal-800">
      <div className="items-center  flex justify-center">
        <img src={Logo} alt="Logo" className=" w-[40%] md:w-[50%]" />
      </div>
      <div className=" md:text-xl flex justify-center items-center text-gray-100 font-semibold">
        <span>AGENDAPAL</span>
      </div>
      <div>
        <button
          onClick={() => activityStore.openForm()}
          className="md:text-xl shadow-md border-none p-2 px-3 rounded-md text-white bg-orange-600 md:font-medium"
        >
          Add Schedule
        </button>
      </div>
    </header>
  );
};

export { NavBar };

//  <header className="w-full bg-black mt-[20rm]">
//       <div
//         className="fixed top-0 flex flex-row bg-green-500"
//         style={{ padding: "10px" }}
//       >
//         <span>Activities</span>
//         <div>
//           <button onClick={() => activityStore.openForm()}>
//             Create Schedule
//           </button>
//         </div>
//         <div>
//           <img src={Logo} alt="" style={{ marginRight: "10px" }} />
//           Reactivities
//         </div>
//       </div>
//     </header>
