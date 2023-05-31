import { Link } from "react-router-dom";
import Input from "../../common/Input";
import TextLink from "../../common/TextLink";
import Button from "../../common/Button";

const LoginForm = () => {
  return (
    <form action="" className="registration__form">
      <Input label={"email"} type={"email"} />
      <div className="password">
        <Input label="Password" type={"password"} />

        <div className="password__forgot">
          <Link to={"/auth/forgot"}>
            <TextLink>Forgot Password?</TextLink>
          </Link>
        </div>
      </div>
      <Button>Sign In</Button>
    </form>
  );
};

export default LoginForm
