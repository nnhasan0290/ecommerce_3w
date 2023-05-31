import { ImFacebook, ImGithub, ImGoogle } from "react-icons/im";
import IconButton from "../../common/IconButton";
import TextLink from "../../common/TextLink";
import Divider from "../../common/Divider";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Heading from "../../common/Heading";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegistryForm = () => {
  const [signupState, setSignupState] = useState(false);
  return (
    <>
      <Heading> Welcome</Heading>
      {signupState && <Input label={"Full Name"} />}
      <Input label={"email"} type={"email"} />
      <div className="password">
        <Input label="Password" type={"password"} />
        {!signupState && (
          <div className="password__forgot">
            <Link to={"/auth/forgot"}>
              <TextLink>Forgot Password?</TextLink>
            </Link>
          </div>
        )}
      </div>
      {signupState ? <Button>Sign Up</Button> : <Button>Sign In</Button>}
      <div className="form__links">
        <p className="">
          {signupState ? "Already Have an account?" : "New Here?"}{" "}
        </p>
        <TextLink onClick={() => setSignupState(!signupState)}>
          {signupState ? "Sign In" : "Create an Account"}
        </TextLink>
      </div>
      <Divider />

      {/* Social icon area */}
      <div className="form__icons">
        <IconButton icon={<ImFacebook />} color="primary" />
        <IconButton icon={<ImGoogle />} color="brick" />
        <IconButton icon={<ImGithub />} color="secondary" />
      </div>
    </>
  );
};

export default RegistryForm;
