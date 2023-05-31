import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Heading from "../../common/Heading";
import Input from "../../common/Input";
import TextLink from "../../common/TextLink";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { LuMail } from "react-icons/lu";

const ForgotPassword = () => {
  const [isLinkSent, setIsLinkSent] = useState(false);
  return (
    <>
      {!isLinkSent ? (
        <>
          <Heading>Forgot Password?</Heading>
          <Input label={"email"} type={"email"} />
          <Button onClick={() => setIsLinkSent(true)}>Send Request Link</Button>
          <div className="back_login_btn">
            <FaChevronLeft />
            <Link to="/auth/">
              <TextLink>Back To Login</TextLink>
            </Link>
          </div>
        </>
      ) : (
        <>
          <LuMail size={32}/>
          <Heading> Password Reset</Heading>
          <p>
            A link of reset password is sent to your email.
          </p>
          <Button>Send Link Again</Button>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
