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
                GitHub
              </Typography.Text>
              <Typography.Text strong style={{ cursor: "pointer" }}>
                Gmail
              </Typography.Text>
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default _Footer;