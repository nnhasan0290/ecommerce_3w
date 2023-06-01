import { GoogleOAuthProvider } from "@react-oauth/google";
import authConfig from "../../../../config/authConfig";
import { useGoogleLogin } from "@react-oauth/google";
import IconButton from "../../../common/IconButton";
import { ImGoogle } from "react-icons/im";

const GoogleAuthBtn = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    scope: "profile email"
  });
  return (
    <IconButton onClick={() => login()} icon={<ImGoogle />} color="brick" />
  );
};

const GoogleProvider = () =>  (
  <GoogleOAuthProvider clientId={authConfig.google.clientId}>
    <GoogleAuthBtn />
  </GoogleOAuthProvider>
);

export default GoogleProvider
