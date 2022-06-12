import { Component } from "react";
import { Layout, Typography } from "antd";
import "./Footer.css"

const { Footer } = Layout;

class _Footer extends Component {
  render() {
    return (
      <Layout style={{ background: "#D9F970" }}>
        <Footer className="footer">
          <Typography.Title
            level={4}
            className="footer__title__author"
            style={{ color: "#48036F" }}
          >
            Автор: Юдин Ярослав
          </Typography.Title>
          <div>
            <Typography.Title
              level={4}
              style={{ color: "#48036F", fontSize: 16 }}
            >
              Контакты
            </Typography.Title>
            <div className="divContacts">
              <Typography.Text strong style={{ cursor: "pointer" }}>
                <a href="https://github.com/Yargo54" target="_blanck" style={{color: "#48036F"}}>GitHub</a>
              </Typography.Text>
              <Typography.Text strong style={{ cursor: "pointer" }}>
                <a href="mailto:yargo.357@gmail.com" style={{color: "#48036F"}}>Gmail</a>
              </Typography.Text>
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default _Footer;