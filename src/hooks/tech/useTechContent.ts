import { ReturnedTechData } from "models/tech/tech.types";
import { useQuery } from "react-query";
import { getTechData } from "services/tech/getTechData";

export const useTechData = () => {
  const techData = useQuery<ReturnedTechData>(["tech-data"], () =>
    getTechData()
  );

  return techData?.data ?? { techData: { tech: [] }, loading: true };
};
