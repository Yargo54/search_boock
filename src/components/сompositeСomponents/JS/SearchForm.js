import { Component } from "react";
import { Button, Form, Input, Typography } from "antd";
import "../CSS/SearchForm.css";

const layout = {
  labelCol: {
    span: 13,
  },
  wrapperCol: {
    span: 16,
  },
};

class _SearchForm extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <Form {...layout} onFinish={onSearch}>
        <Form.Item
          name={["title"]}
          label="Название книги"
          className="formItem__label"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, заполните это поле',
            },
          ]}
        >
          <Input className="formInput" style={{ color: "white" }} />
        </Form.Item>
        <Typography.Title level={3} className="search__title" style={{ color: "white" }}>
          Доп. параметры поиска
        </Typography.Title>
        <Form.Item
          name={["author"]}
          label="Автор:"
          className="formItem__label"
        >
          <Input className="formInput" style={{ color: "white" }} />
        </Form.Item>
        <Form.Item
          name={["themes"]}
          label="Тематика (на английском)"
          className="formItem__label"
        >
          <Input className="formInput" style={{ color: "white" }} />
        </Form.Item>
        <Form.Item
          name={["publishingHouse"]}
          label="Издательство"
          className="formItem__label"
        >
          <Input className="formInput" style={{ color: "white" }} />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="submitButton">
          Поиск
        </Button>
      </Form>
    );
  }
}

export default _SearchForm;
