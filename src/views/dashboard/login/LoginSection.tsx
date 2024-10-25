import { ActionButton } from "components/buttons/action-button/ActionButton";
import { FloatingCentralContainer } from "components/containers/Containers";
import { TextInput } from "components/inputs/text-input/TextInput";
import { Label, MainTitle } from "components/text/Text";
import { useCallback, useState } from "react";
import { authenticateUser } from "services/dashboard/authenticateUser";
import { useDashboardContext } from "../dashboard-context/dashboard.context";
import { useLoginOnLocal } from "../useLoginOnLocal";

export const LoginSection = () => {
  useLoginOnLocal();
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [mfaCode, setMfaCode] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const { dispatch } = useDashboardContext();
  const handleSubmit = useCallback(async () => {
    setErrorMessage(null);
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
      } else {
        setErrorMessage("Error logging in");
      }
    }
  }, [dispatch, username, password, mfaCode]);

  return (
    <FloatingCentralContainer>
      <MainTitle>Login To Dashboard</MainTitle>
      <form>
        <TextInput label="Username" onChange={setUsername} />
        <TextInput label="Password" type="password" onChange={setPassword} />
        <TextInput label="MFA" onChange={setMfaCode} />
        <ActionButton
          title="Login"
          isDisabled={!(mfaCode && password && username)}
          onClick={handleSubmit}
        />
      </form>
      <Label>{errorMessage}</Label>
    </FloatingCentralContainer>
  );
};
