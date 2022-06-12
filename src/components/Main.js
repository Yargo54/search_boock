import { Component } from "react";
import { Layout } from "antd";
import "./Main.css";
import _Header from "./сompositeСomponents/JS/Header";
import _Sider from "./сompositeСomponents/JS/Sider";
import _Content from "./сompositeСomponents/JS/Content";
import _Footer from "./сompositeСomponents/JS/Footer";
import ApiContainer from "../API/ApiContainer";

function chekFormValue(val, dict) {
  dict.forEach((item) => {
    if (typeof val[item] === "undefined") {
      val[item] = "";
    }
  });
}

class Main extends Component {
  state = {
    searchParams: [],
  };

  onSearch = (value) => {
    chekFormValue(value, ["author", "title", "publishingHouse"]);
    ApiContainer.ProxyApiBooks.getSearchBooks(value)
    .then((data) =>
      this.setState({
        searchParams: data.items.map((item) => {
          if (item?.volumeInfo?.imageLinks?.smallThumbnail) {
            return {
              author: item.volumeInfo.authors,
              title: item.volumeInfo.title,
              img: item.volumeInfo.imageLinks.smallThumbnail,
              previewLink: item.volumeInfo.infoLink,
              publishedDate: item.volumeInfo.publishedDate,
            };
          } else {
            return {
              author: item.volumeInfo.authors,
              title: item.volumeInfo.title,
              img: "https://www.hot-motor.ru/body/clothes/images/no_icon.png",
              previewLink: item.volumeInfo.infoLink,
              publishedDate: item.volumeInfo.publishedDate,
            };
          }
        }),
      })
    )
    .catch(() => alert(`Упс! Что-то пошло не так! Проверьте ввод.`))
  };

  render() {
    console.log(this.state.searchParams);
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
