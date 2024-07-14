import About from "./Components/About";
import InnerPage from "./Components/InnerPage";
import Login from "./Components/Login"


import {BrowserRouter, Routes, Route} from "react-router-dom";
import Thank from "./Components/Thank";
import Me from "./Components/Me";
import Son from "./InnerPages/Son";
import Daughters from "./Components/Daughters";


function App() {
  return (


<BrowserRouter> 
       <Routes>
       <Route path="/" element={<Login/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/inner" element={<InnerPage/>} />
           <Route path="/thank" element={<Thank/>} />
           <Route path="/me" element={<Me/>} />
           <Route path="/son" element={<Son/>} />
           <Route path="/daughters" element={<Daughters/>} />

         


           </Routes>
           </BrowserRouter>

  );
          
}

export default App;
