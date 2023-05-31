import { Outlet } from "react-router-dom";
import Header from "../client/Header/Header";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
