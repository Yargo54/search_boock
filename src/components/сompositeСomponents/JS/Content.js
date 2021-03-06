import { Component } from "react";
import { Layout, Card, List} from "antd";
import "../CSS/Content.css";
import { LikeOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Meta } = Card;

class _Content extends Component {
  render() {
    const { params, onClickLike } = this.props;

    if (params.length <= 0) {
      return (
        <Content className="content">
          <div className="emptyContentText">
            Здесь отобразятся карточки книг...
          </div>
        </Content>
      );
    }

    return (
      <Content className="content">
        <List
          grid={{
            gutter: 24,
            column: 4,
          }}
          dataSource={params}
          renderItem={(item) => (
            <List.Item>
              <Card
                className="card"
                cover={<img alt="title img" src={item.img} />}
              >
                <Meta
                  key={item.id}
                  title={item.title}
                  description={
                    <div style={{ marginBottom: 15 }}>
                      <div className="authorsContainer">
                        <span className="authors__title">Авторы:</span>
                        {item.author
                          ? item.author.map((i) => {
                              return <span>{i}</span>;
                            })
                          : "Автор(ы) не указаны"}
                      </div>
                      <span>{item.publishedDate}</span>
                    </div>
                  }
                />
                <div className="div__about__like">
                  <a href={item.webReaderLink} target="_blank">
                    Ознакомиться
                  </a>
                  <LikeOutlined
                    className="like"
                    onClick={() => onClickLike(item.id)}
                  />
                </div>
              </Card>
            </List.Item>
          )}
          pagination={{ pageSize: 4 }}
        />
      </Content>
    );
  }
}

export default _Content;
