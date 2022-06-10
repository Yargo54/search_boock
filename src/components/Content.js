import { Component } from "react";
import { Layout } from "antd";
import "./Content.css";

const { Content } = Layout;

class _Content extends Component {
  render() {
    return <Content className="content">Здесь отобразятся книги</Content>;
  }
}

export default _Content;