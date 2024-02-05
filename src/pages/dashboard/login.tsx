import FullScreenLayout from "layout/FullScreenLayout";
import { NextPage } from "next";
import { LoginSection } from "views/dashboard/login/LoginSection";
import { useRedirectOnLoginLogout } from "views/dashboard/useRedirectOnLogout";

const Login: NextPage = () => {
  useRedirectOnLoginLogout();
  return (
    <FullScreenLayout>
      <LoginSection />
    </FullScreenLayout>
  );
};

export default Login;
