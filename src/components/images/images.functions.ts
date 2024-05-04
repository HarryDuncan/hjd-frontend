export const imageLoader = ({ src }: { src: string }) => {
  return `${process.env.NEXT_PUBLIC_CONTENT_ROOT}${src}`;
};
