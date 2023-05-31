import { BrowserRouter } from "react-router-dom";
import "./assets/styles/_global.scss";
import Routers from "./Routers";
function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
