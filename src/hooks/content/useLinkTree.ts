import { useQuery } from "react-query";
import { getLinkTree } from "services/link-tree/getLinkTree";
import { FetchLinkTreeResponse } from "models/link-tree/types";

export const useLinkTree = () => {
  const links = useQuery<FetchLinkTreeResponse>(["link-tree"], () =>
    getLinkTree()
  );
  return links?.data ?? { links: [], loading: true };
};
