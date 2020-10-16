import { Layout, MainSlider } from "../components";

export default function Home({ data }) {
  return (
    <Layout>
      <MainSlider data={data} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const http = "http://localhost:1337/slides";
  const res = await fetch(http);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
