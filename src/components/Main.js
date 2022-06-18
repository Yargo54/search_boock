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
      val[item] = "%25";
    }
  });
}

class Main extends Component {
  state = {
    searchParams: [],
    likeBooks: [],
  };

  onClickLike = (id) => {
    const newBook = this.state.searchParams.find((book) => {
      return book.id === id;
    });
    this.state.likeBooks.includes(newBook)
      ? alert("Эта книга уже добавлена в список понравившегося")
      : this.setState({ likeBooks: [...this.state.likeBooks, newBook] });
  };

  onSearch = (value) => {
    chekFormValue(value, ["author", "themes", "publishingHouse"]);
    ApiContainer.ProxyApiBooks.getSearchBooks(value)
      .then((data) =>
        this.setState({
          searchParams: data.items.map((item) => {
            if (item?.volumeInfo?.imageLinks?.smallThumbnail) {
              return {
                id: item.id,
                author: item.volumeInfo.authors,
                title: item.volumeInfo.title,
                img: item.volumeInfo.imageLinks.smallThumbnail,
                previewLink: item.volumeInfo.infoLink,
                publishedDate: item.volumeInfo.publishedDate,
                categories: item.volumeInfo.categories,
                webReaderLink: item.accessInfo.webReaderLink,
              };
            } else {
              return {
                id: item.id,
                author: item.volumeInfo.authors,
                title: item.volumeInfo.title,
                img: "https://www.hot-motor.ru/body/clothes/images/no_icon.png",
                previewLink: item.volumeInfo.infoLink,
                publishedDate: item.volumeInfo.publishedDate,
                categories: item.volumeInfo.categories,
                webReaderLink: item.accessInfo.webReaderLink,
              };
            }
          }),
        })
      )
      .catch(() => alert(`Упс! Что-то пошло не так! Проверьте ввод.`));
  };

  render() {
    return (
      <Layout>
        <_Sider onSearch={this.onSearch} likeBooks={this.state.likeBooks}/>
        <Layout>
          <_Header />
          <_Content
            params={this.state.searchParams}
            onClickLike={this.onClickLike}
          />
          <_Footer />
        </Layout>
      </Layout>
    );
  }
}

export default Main;
