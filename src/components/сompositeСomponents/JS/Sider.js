import { Component } from "react";
import { Layout, Typography, Card } from "antd";
import "../CSS/Sider.css";
import _SearchForm from "./SearchForm";

const { Sider } = Layout;
const { Link } = Typography;

class _Sider extends Component {
  
  ellipsis = {
    expandable: false,
  }

  render() {
    const { onSearch, likeBooks } = this.props;
    
    return (
      <Sider className="sider" width={"max-content"}>
        <div className="siderDivTypography">
          <Typography.Title
            level={2}
            className="siderTitleSearch"
            style={{ color: "white" }}
          >
            Search
          </Typography.Title>
          <Typography.Title
            level={2}
            className="siderTitleBooks"
            style={{ color: "white", marginBottom: 0 }}
          >
            Books
          </Typography.Title>
        </div>
        <hr className="hrStyle"></hr>
        <Typography.Title
          level={3}
          className="search__title"
          style={{ color: "white" }}
        >
          Введите запрос
        </Typography.Title>
        <_SearchForm onSearch={onSearch} />
        <Card className="cardLikeBooksList" bordered={false}>
          <div className="titleLikeList">Список понравившегося</div>
          {likeBooks.map((i) => (
            <div className="likeBooksList">
              <Link
                href={i.previewLink}
                target="_blank"
                style={{ paddingBottom: "1em", color: "white" }}
                ellipsis={this.ellipsis.expandable}
              >
                {i.title} <span style={{color:"#2685B6"}}>(Узнать подробнее)</span>
              </Link>
            </div>
          ))}
        </Card>
      </Sider>
    );
  }
}

export default _Sider;
