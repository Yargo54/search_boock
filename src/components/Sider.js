import { Component } from "react";
import { Layout, Typography, Button, Form, Input, Select } from "antd";
import "./Sider.css";

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 16,
  },
};

const { Sider } = Layout;
const { Option } = Select;

class _Sider extends Component {
  render() {
    return (
      <Sider className="sider" collapsedWidth="0" width={400}>
        <Typography.Title level={3} className="search__title">
          Введите параметры поиска
        </Typography.Title>
        <Form {...layout}>
          <Form.Item
            name={["search", "author"]}
            label="Автор:"
            className="formItem__label"
          >
            <Input className="formInput" />
          </Form.Item>
          <Form.Item
            name={["search", "designation"]}
            label="Название"
            className="formItem__label"
          >
            <Input className="formInput" />
          </Form.Item>
          <Form.Item
            name={["search", "themes"]}
            label="Тематика"
            className="formItem__label"
          >
            <Input className="formInput" />
          </Form.Item>
          <Form.Item
            name={["search", "publishingHouse"]}
            label="Издательство"
            className="formItem__label"
          >
            <Input className="formInput" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
            <Button type="primary" htmlType="submit" className="submitButton">
              Поиск
            </Button>
          </Form.Item>
        </Form>
        <Typography.Title level={3} className="search__title titleSortMrgn">
          Выберете параметр сортировки
        </Typography.Title>
        <Select className="sortSelect">
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
      </Sider>
    );
  }
}

export default _Sider;
