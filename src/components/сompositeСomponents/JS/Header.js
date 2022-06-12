import { Component } from "react";
import { Layout, Typography} from "antd";
import "../CSS/Header.css";
import { BookOutlined } from '@ant-design/icons';

const { Header } = Layout;

class _Header extends Component {
  render() {
    return (
      <Layout style={{ background: "#493BA8"}}>
        <Header className="header">
          <div className="headerDiv">
            <div className="headerDivTypography">
              <Typography.Title level={2} className="siderTitleSearch" style={{color: "white"}}>
                Search
              </Typography.Title>
              <Typography.Title level={2} className="siderTitleBooks" style={{color: "white"}}>
                Books
              </Typography.Title>
            </div>
            <Typography.Title level={1} className="header__title" style={{color: "white"}}>
              Поисковик книг
            </Typography.Title>
            <BookOutlined className="iconBook"/>
          </div>
        </Header>
      </Layout>
    );
  }
}

export default _Header;
