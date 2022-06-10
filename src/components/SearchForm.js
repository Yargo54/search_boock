import { Component } from "react";
import { Typography, Button, Form, Input } from "antd";
import "./SearchForm.css"

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 16,
  },
};

class _SearchForm extends Component {
  render() {
    return (
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
    );
  }
}

export default _SearchForm;
