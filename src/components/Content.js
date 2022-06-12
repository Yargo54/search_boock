import { Component } from "react";
import { Layout, Card, List } from "antd";
import "./Content.css";

const { Content } = Layout;
const { Meta } = Card;

class _Content extends Component {
  render() {
    const { params } = this.props;

    return (
      <Content className="content">
        {params.length > 0 ? (
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
                  <a href={item.previewLink} target="_blank">
                    Узнать подробнее
                  </a>
                </Card>
              </List.Item>
            )}
            pagination={{ pageSize: 4 }}
          />
        ) : (
          <div className="emptyContentText">Здесь будут карточки книг</div>
        )}
      </Content>
    );
  }
}

export default _Content;
