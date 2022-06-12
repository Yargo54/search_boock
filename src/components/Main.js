import { Component } from "react";
import { Layout } from "antd";
import "./Main.css";
import _Header from "./Header";
import _Sider from "./Sider";
import _Content from "./Content";
import _Footer from "./Footer";
import ApiContainer from "../API/ApiContainer";

function chekFormValue(val, dict){
  dict.forEach((item) => {
    if(typeof val[item] === "undefined") {
      val[item] = "";
    }
  })
}

class Main extends Component {
  state = {
    searchParams: [],
  };

  onSearch = (value) => {
    chekFormValue(value, ['author', 'title', 'publishingHouse'])
    ApiContainer.ProxyApiBooks.getSearchBooks(value)
    .then((data) =>
      this.setState({
        searchParams: data.items.map((item) => {
          return {
            author: item.volumeInfo.authors,
            title: item.volumeInfo.title,
            img: item.volumeInfo.imageLinks.smallThumbnail,
            previewLink: item.volumeInfo.infoLink,
            publishedDate: item.volumeInfo.publishedDate,
          };
        }),
      })
    );
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <_Header />
        <Layout>
          <_Sider onSearch={this.onSearch} />
          <_Content params={this.state.searchParams} />
        </Layout>
        <_Footer />
      </Layout>
    );
  }
}

export default Main;
