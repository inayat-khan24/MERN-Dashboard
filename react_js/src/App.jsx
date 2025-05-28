import DashBorad from "./page/DashBorad";
import Home from "./page/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"




const App = () => {


  return (
<BrowserRouter>
<Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/dashbord" element={<DashBorad/>} />
</Routes>

</BrowserRouter>
  );
};

export default App;
