import { Layout, MainSlider } from "../components";

import api from "./api/data.json";

export default function Home({ data }) {
  if (data === undefined) {
    data = api;
  }
  return (
    <Layout>
      <MainSlider data={api} />
    </Layout>
  );
}

// Запуск бэкэнда !!!!
// export async function getServerSideProps() {
//   const http = "http://localhost:1337/slides";
//   const res = await fetch(http);
//   if (!res.ok) {
//   }
//   const data = await res.json();
//
//   return {
//     props: {
//       data,
//     },
//   };
// }
