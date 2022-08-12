import Layout from "components/layout/DefaultLayout";
import { PageContainer } from "components/styled-components/Containers";
import { useContent } from "hooks/content/useContent";
import { useContentForPage } from "hooks/content/useContentForPage";
import { ImageContent, TextContent } from "models/content/content.types";
import type { NextPage } from "next";
import { useMemo } from "react";

const BIO_PAGE_SECTIONS = ["Artist", "DJ", "Creative Technologist"];
const IMAGE_CONTENT_SECTIONS = [] as string[];
const Bio: NextPage = () => {
  const { textContent, imageContent } = useContent();
  const { text, images } = useContentForPage(
    textContent,
    imageContent,
    BIO_PAGE_SECTIONS,
    IMAGE_CONTENT_SECTIONS
  );
  console.log(text, images);
  return (
    <Layout>
      <h1>Music</h1>
    </Layout>
  );
};

export default Bio;
