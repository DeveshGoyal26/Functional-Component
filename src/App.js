
// import "./App.css";
// importing components from react-router-dom package
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout'
  
// import Home component
import Home from "./day2/Components/Home";
// import About component
import About from "./day2/Components/About";
// import ContactUs component
import ContactUs from "./day2/Components/ContactUs";

import Counter from "./day2/Scripts/counter";

import Data from "./day1/Scripts/Buttons";

import Todo_func from "./day2/Scripts/Todo"
  
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Day1" element={<Data />} />
          <Route path="/Todo" element={<Todo_func />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
  
export default App;