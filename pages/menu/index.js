import MenuPage from "../../components/templates/MenuPage";

const Menu = ({ data }) => {
  return <MenuPage data={data} />;
};

export default Menu;

export async function getStaticProps() {
  const req = await fetch(" http://localhost:4000/data");
  const data = await req.json();

  return {
    props: {
      data,
      revalidate: 15, // second
    },
  };
}
