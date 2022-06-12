import { Component } from "react";
import { Layout, Typography } from "antd";
import "../CSS/Sider.css";
import _SearchForm from "./SearchForm";

const { Sider } = Layout;

class _Sider extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <Sider className="sider" width={350}>
        <Typography.Title level={3} className="search__title" style={{marginBottom: 30, color: "white"}}>
          Введите параметры поиска
        </Typography.Title>
        <_SearchForm onSearch = {onSearch}/>
      </Sider>
    );
  }
}

export default _Sider;
