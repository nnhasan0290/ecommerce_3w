import { useState } from "react";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import { LuCheck } from "react-icons/lu";
import Heading from "../../../components/common/Heading";

const ResetPass = () => {
  const [isReset, setIsReset] = useState(false);
  return (
    <>
      {!isReset ? (
        <form className="resetPass">
          <Input label={"New Password"} />
          <Input label={"Confirm Password"} />
          <Button onClick={() => setIsReset(true)}>Reset Password</Button>
        </form>
      ) : (
        <>
          <LuCheck size={32} />
          <Heading>Password Changed</Heading>
          <p>Your password has been changed successfully</p>
          <Button>Back to Home</Button>
        </>
      )}
    </>
  );
};

export default ResetPass;
