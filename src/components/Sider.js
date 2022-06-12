import { Component } from "react";
import { Layout, Typography } from "antd";
import "./Sider.css";
import _SearchForm from "./SearchForm";
import _Select from "./Select";

const { Sider } = Layout;

class _Sider extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <Sider className="sider" width={350}>
        <Typography.Title level={3} className="search__title" style={{marginBottom: 30}}>
          Введите параметры поиска
        </Typography.Title>
        <_SearchForm onSearch = {onSearch}/>
        {/* <Typography.Title level={3} className="search__title titleSortMrgn">
          Выберите параметр сортировки
        </Typography.Title>  */}
        {/* <_Select /> */}
      </Sider>
    );
  }
}

export default _Sider;
