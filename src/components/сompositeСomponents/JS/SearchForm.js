import { Component } from "react";
import { Button, Form, Input } from "antd";
import "../CSS/SearchForm.css";

const layout = {
  labelCol: {
    span: 10,
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
          name={["author"]} 
          label="Автор:"
          className="formItem__label"
        >
            <Input className="formInput" style={{color: "white"}}/>
        </Form.Item>
        <Form.Item
          name={["title"]}
          label="Название"
          className="formItem__label"
        >
          <Input className="formInput" style={{color: "white"}}/>
        </Form.Item>
        <Form.Item
          name={["themes"]}
          label="Тематика"
          className="formItem__label"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, заполните это поле',
            },
          ]}
        >
          <Input className="formInput" style={{color: "white"}}/>
        </Form.Item>
        <Form.Item
          name={["publishingHouse"]}
          label="Издательство"
          className="formItem__label"
        >
          <Input className="formInput" style={{color: "white"}}/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <Button type="primary" htmlType="submit" className="submitButton">
            Поиск
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default _SearchForm;
