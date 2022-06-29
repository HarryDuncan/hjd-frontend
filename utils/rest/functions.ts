export const isError = (status: number | undefined) => {
  return !!status && status !== 200;
};
