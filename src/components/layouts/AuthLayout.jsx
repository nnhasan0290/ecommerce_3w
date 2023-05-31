import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="registry">
      <div className="registry__img">
        <img
          src={
            "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/boy-with-rocket-light.png"
          }
          alt=""
        />
        <div className="overlay"></div>
      </div>
      <div className="registry__form">
        <div className="registry__form__inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
