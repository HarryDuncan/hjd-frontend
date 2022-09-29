import { useRouter } from "next/router";

export const useOnScroll = () => {
  const router = useRouter();
  console.log(router.pathname);
};
