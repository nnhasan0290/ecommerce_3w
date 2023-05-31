import Button from "../../common/Button";
import Input from "../../common/Input";

const SignUpForm = () => {
  return (
    <form className="registration__form">
      <Input label={"Full Name"} />
      <Input label={"email"} type={"email"} />
      <Input label="Password" type={"password"} />
      <Input label="Confirm Password" type={"password"} />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
