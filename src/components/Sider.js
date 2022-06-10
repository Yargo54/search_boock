import { Component } from "react";
import { Layout, Typography } from "antd";
import "./Sider.css";
import _SearchForm from "./SearchForm";
import _Select from "./Select";

const { Sider } = Layout;

class _Sider extends Component {
  render() {
    return (
      <Sider className="sider" collapsedWidth="0" width={400}>
        <Typography.Title level={3} className="search__title">
          Введите параметры поиска
        </Typography.Title>
        <_SearchForm />
        <Typography.Title level={3} className="search__title titleSortMrgn">
          Выберите параметр сортировки
        </Typography.Title> 
        <_Select />
      </Sider>
    );
  }
}

export default _Sider;
