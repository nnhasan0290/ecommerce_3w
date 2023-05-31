import { LuMail } from "react-icons/lu";
import Heading from "../../../components/common/Heading";

const EmailSentConfirm = () => {
  return (
    <>
      <div>
        <LuMail size={32} />
      </div>
      <Heading>Email sent Successfully</Heading>
      <p>Please check your email for Furthermore procedure</p>
    </>
  );
};

export default EmailSentConfirm;
