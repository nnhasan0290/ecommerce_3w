import { BrowserRouter } from "react-router-dom";
import "./assets/styles/_global.scss";
import Routers from "./Routers";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
