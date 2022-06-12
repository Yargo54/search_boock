import { Component } from "react";
import { Select } from "antd";
import "../CSS/Select.css";

const { Option } = Select;

class _Select extends Component {
  render() {
    return (
      <Select className="sortSelect" placeholder="выберите параметр">
        <Option value="Автор" className="sortSelect__option">
          Автор
        </Option>
        <Option value="Издательство" className="sortSelect__option">
          Издательство
        </Option>
        <Option value="Количество страниц" className="sortSelect__option">
          Количество страниц
        </Option>
      </Select>
    );
  }
}

export default _Select;
