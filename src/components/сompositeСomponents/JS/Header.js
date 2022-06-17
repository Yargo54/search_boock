import { Component } from "react";
import { Layout, Typography} from "antd";
import "../CSS/Header.css";
import { BookOutlined } from '@ant-design/icons';

const { Header } = Layout;

class _Header extends Component {
  render() {
    return (
        <Header className="header">
          <div className="headerDiv">
            <Typography.Title level={1} className="header__title" style={{color: "white", marginBottom: 0}}>
              Поисковик книг
            </Typography.Title>
            <BookOutlined className="iconBook"/>
          </div>
        </Header>
    );
  }
}

export default _Header;
