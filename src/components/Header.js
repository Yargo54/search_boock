import { Component } from "react";
import { Layout, Typography, Image } from "antd";
import "./Header.css";

const { Header } = Layout;

class _Header extends Component {
  render() {
    return (
      <Layout style={{ background: "#D9F970" }}>
        <Header className="header">
          <div className="headerDiv">
            <div className="headerDivTypography">
              <Typography.Title level={2} className="siderTitleSearch">
                Search
              </Typography.Title>
              <Typography.Title level={2} className="siderTitleBooks">
                Books
              </Typography.Title>
            </div>
            <Typography.Title level={1} className="header__title">
              Поисковик книг
            </Typography.Title>
            <Image width={75} src="../images/logo.png" alt="logo" />
          </div>
        </Header>
      </Layout>
    );
  }
}

export default _Header;
