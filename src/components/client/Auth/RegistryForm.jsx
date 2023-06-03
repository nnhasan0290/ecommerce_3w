import { ImFacebook, ImGithub, ImGoogle } from "react-icons/im";
import IconButton from "../../common/IconButton";
import TextLink from "../../common/TextLink";
import Divider from "../../common/Divider";
import Heading from "../../common/Heading";
import { useState } from "react";
import SignUpForm from "./SignUpform";
import LoginForm from "./LginForm";
import GoogleProvider from "./SocialLogin/Google";

const RegistryForm = () => {
  const [signupState, setSignupState] = useState(false);
  return (
    <>
      <Heading> Welcome</Heading>
      {/* form */}
      {signupState ? <SignUpForm /> : <LoginForm />}

      <div className="form__links">
        <p className="">
          {signupState ? "Already Have an account?" : "New Here?"}{" "}
        </p>
        <TextLink onClick={() => setSignupState(!signupState)}>
          {signupState ? "Sign In" : "Create an Account"}
        </TextLink>
      </div>
      <Divider>OR</Divider>

      {/* Social icon area */}
      <div className="form__icons">
        <IconButton icon={<ImFacebook />} color="primary" />
        <GoogleProvider />
        <IconButton icon={<ImGithub />} color="secondary" />
      </div>
    </>
  );
};

export default RegistryForm;
