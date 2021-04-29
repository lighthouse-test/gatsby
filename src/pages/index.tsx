import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Todos from "../components/Todos";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <>
          <Helmet>
            <title>Lighthouse Test | Gatsby</title>
            <meta name="description" content="Lighthouse Test | Gatsby" />
          </Helmet>
          <h2>Home</h2>
          <Todos />
        </>
      </Layout>
    );
  }
}
