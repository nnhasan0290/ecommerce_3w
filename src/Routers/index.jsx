import { Route, Routes } from "react-router-dom";
import ClientLayout from "../components/layouts/ClientLayout";
import ClientHome from "../pages/client/ClientHome";
import ResetPass from "../pages/client/Auth/ResetPass";
import EmailSentConfirm from "../pages/client/Auth/EmailSentConfirm";
import Auth from "../pages/client/Auth";
import AuthLayout from "../components/layouts/AuthLayout";
import ForgotPass from "../pages/client/Auth/ForgotPass";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<ClientHome />}></Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Auth />}></Route>
        <Route path="forgot" element={<ForgotPass />}></Route>
        <Route path="reset" element={<ResetPass />}></Route>
        <Route path="emailsent" element={<EmailSentConfirm />}></Route>
      </Route>
    </Routes>
  );
};

export default Routers;
