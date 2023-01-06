import Layout from "components/layout/DefaultLayout";
import ExhibitionLayout from "components/layout/ExhibitionLayout";
import { usePaintingData } from "hooks/art/usePaintingData";
import { useRouter } from "next/router";

const Compute = () => {
  return (
    <ExhibitionLayout>
      <h1>Compute</h1>
    </ExhibitionLayout>
  );
};

export default Compute;
