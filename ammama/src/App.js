import About from "./Components/About";
import InnerPage from "./Components/InnerPage";
import Login from "./Components/Login"


import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (


<BrowserRouter> 
       <Routes>
       <Route path="/" element={<Login/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/inner" element={<InnerPage/>} />

           </Routes>
           </BrowserRouter>

  );
          
}

export default App;
