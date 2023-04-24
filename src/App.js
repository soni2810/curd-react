import Navbar from "./components/navbar";
import './App.css';
import Create from './components/create';
import { Read } from './components/Read';
import { Update } from './components/Update';
// import { PersonAdd} from './components/PersonAdd';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/personlist" element={<Read/>}>Person List</Route>
      <Route path="/" element={<Create/>}>Person</Route>
      <Route path="/update" element={<Update/>}>Update</Route>
      
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
