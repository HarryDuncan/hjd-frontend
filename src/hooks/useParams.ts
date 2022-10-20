import { useRouter } from "next/router";

export const useParams = (paramKey: string) => {
  const router = useRouter();
  console.log(router);
  console.log(router.basePath);
  const itemKey = router.query[paramKey] ?? null;
  return itemKey;
};
