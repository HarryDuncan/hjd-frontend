import { ActionButton } from "components/buttons/action-button/ActionButton";
import { FloatingCentralContainer } from "components/containers/Containers";
import { TextInput } from "components/inputs/text-input/TextInput";
import { MainTitle } from "components/text/Text";
import { useState } from "react";
import { authenticateUser } from "services/dashboard/authenticateUser";
import { useDashboardContext } from "../dashboard-context/dashboard.context";

export const LoginSection = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [mfaCode, setMfaCode] = useState<string | null>(null);

  const { dispatch } = useDashboardContext();
  const handleSubmit = async () => {
    if (username && password && mfaCode) {
      const authenticationData = {
        username,
        password,
        mfaCode,
      };
      const { success } = await authenticateUser(authenticationData);
      if (success) {
        dispatch({
          type: "LOGIN",
        });
      }
    }
  };

  return (
    <FloatingCentralContainer>
      <MainTitle>Login To Dashboard</MainTitle>
      <form onSubmit={handleSubmit}>
        <TextInput
          label={"Username"}
          value={username ?? ""}
          onChange={setUsername}
          placeholder={""}
        />
        <TextInput
          label={"Password"}
          type="password"
          value={password ?? ""}
          onChange={setPassword}
          placeholder={""}
        />
        <TextInput
          label={"MFA"}
          value={mfaCode ?? ""}
          onChange={setMfaCode}
          placeholder={""}
        />
        <ActionButton
          title="Login"
          isDisabled={!(mfaCode && password && username)}
          onClick={handleSubmit}
        />
      </form>
    </FloatingCentralContainer>
  );
};
