import { Component } from "react";
import { Layout, Typography } from "antd";
import "../CSS/Sider.css";
import _SearchForm from "./SearchForm";

const { Sider } = Layout;

class _Sider extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <Sider className="sider" width={"max-content"}>
        <div className="siderDivTypography">
          <Typography.Title level={2} className="siderTitleSearch" style={{ color: "white" }}>
            Search
              </Typography.Title>
          <Typography.Title level={2} className="siderTitleBooks" style={{ color: "white", marginBottom: 0 }}>
            Books
              </Typography.Title>
        </div>
        <hr className="hrStyle"></hr>
        <Typography.Title level={3} className="search__title" style={{ color: "white" }}>
          Введите запрос
        </Typography.Title>
        <_SearchForm onSearch={onSearch} />
      </Sider>
    );
  }
}

export default _Sider;
