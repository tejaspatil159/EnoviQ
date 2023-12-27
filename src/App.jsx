import { Routes } from "react-router-dom";
import "./App.css";
import {
  Attendance,
  Birthday,
  Footer,
  ImportantAnnouncement,
  JoiningAnniversarry,
  LeaveCount,
  Navbar,
  Profile,
} from "./Components";

function App() {
  <Routes>
    <Routes path="/" element={<App />} />
  </Routes>;
  return (
    <div className="font-Rampart">
      <Navbar />

      <div className="grid  grid-cols-2">
        <div className="grid grid-rows-2">
          <div className="grid grid-cols-3 row-span-3">
            <LeaveCount text="Total Leave request" color="bg-yellow-500" />
            <LeaveCount text="Total Leave approved!" color="bg-blue-700" />
            <LeaveCount text="Total claim settled!" color="bg-red-500" />
          </div>
          <div>
            <ImportantAnnouncement />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <Attendance />
          <Profile />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <JoiningAnniversarry />
        <Birthday />
      </div>

      <Footer />
    </div>
  );
}

export default App;
