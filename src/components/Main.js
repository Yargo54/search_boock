import { Component } from "react";
import { Layout } from "antd";
import "./Main.css";
import _Header from "./Header";
import _Sider from "./Sider";
import _Content from "./Content";
import _Footer from "./Footer";

class Main extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <_Header />
        <Layout>
          <_Sider />
          <_Content />
        </Layout>
        <_Footer />
      </Layout>
    );
  }
}

export default Main;
