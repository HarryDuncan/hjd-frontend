import { useRouter } from "next/router";

export const useParams = (paramKey: string) => {
  const router = useRouter();
  const itemKey = router.query[paramKey] ?? null;
  return itemKey;
};
