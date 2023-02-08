import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddStudent from "./Pages/AddStudent/AddStudent";
import ManageStudent from "./Pages/ManageStudent/ManageStudent";

const App = () => {
  return (
    <div className="App flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/managestudent" element={<ManageStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
