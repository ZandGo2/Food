import { useRouter } from "next/router";
import DetailPage from "../../components/templates/DetailPage";

const FoodID = ({ data }) => {
  const route = useRouter();

  if (route.isFallback) {
    return <h2>Loading Page...</h2>;
  }
  return <DetailPage {...data} />;
};

export default FoodID;

export async function getStaticPaths() {
  const req = await fetch("http://localhost:4000/data");
  const data = await req.json();
  const paths = data
    .slice(0, 5)
    .map((item) => ({ params: { FoodID: item.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { FoodID },
  } = context;
  const req = await fetch(`http://localhost:4000/data/${FoodID}`);
  const data = await req.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 10, // second
  };
}
