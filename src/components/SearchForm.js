import { Component } from "react";
import { Button, Form, Input } from "antd";
import "./SearchForm.css";
import ApiContainer from "../API/ApiContainer";

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 16,
  },
};

const searchParam = {};

const onSearch = (value) => {
  searchParam.author = value.author;
  searchParam.designation = value.designation;
  searchParam.themes = value.themes;
  searchParam.publishingHouse = value.publishingHouse;
  console.log(searchParam);
  ApiContainer.ProxyApiBooks.getSearchBooks(`https://www.googleapis.com/books/v1/volumes?q=${searchParam.author}&key=AIzaSyA8o1lCTefxo-KvhUkc8KdtFXMU3QQMFFc`)
}

class _SearchForm extends Component {
  render() {
    return (
      <Form {...layout} onFinish={onSearch}>
        <Form.Item
          name={["author"]}
          label="Автор:"
          className="formItem__label"
        >
          <Input className="formInput" />
        </Form.Item>
        <Form.Item
          name={["designation"]}
          label="Название"
          className="formItem__label"
        >
          <Input className="formInput" />
        </Form.Item>
        <Form.Item
          name={["themes"]}
          label="Тематика"
          className="formItem__label"
        >
          <Input className="formInput" />
        </Form.Item>
        <Form.Item
          name={["publishingHouse"]}
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
