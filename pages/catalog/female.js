import Layout from "../../components/Layout";

export default function Female() {
  return (
    <Layout>
      <input id="week" name="view" type="radio" checked />
      <label htmlFor="week" onClick="">
        Week
      </label>
      <input id="month" name="view" type="radio" />
      <label htmlFor="month" onClick="">
        Month
      </label>
    </Layout>
  );
}
