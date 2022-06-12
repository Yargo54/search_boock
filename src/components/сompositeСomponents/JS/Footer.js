import { Component } from "react";
import { Layout, Typography } from "antd";
import "../CSS/Footer.css"

const { Footer } = Layout;

class _Footer extends Component {
  render() {
    return (
      <Layout style={{ background: "#493BA8" }}>
        <Footer className="footer">
          <Typography.Title
            level={4}
            className="footer__title__author"
            style={{ color: "white" }}
          >
            Автор: Юдин Ярослав
          </Typography.Title>
          <div>
            <Typography.Title
              level={4}
              style={{ color: "white", fontSize: 16 }}
            >
              Контакты
            </Typography.Title>
            <div className="divContacts">
              <Typography.Text strong style={{ cursor: "pointer" }}>
                <a href="https://github.com/Yargo54" target="_blanck" style={{color: "white"}}>GitHub</a>
              </Typography.Text>
              <Typography.Text strong style={{ cursor: "pointer" }}>
                <a href="mailto:yargo.357@gmail.com" style={{color: "white"}}>Gmail</a>
              </Typography.Text>
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default _Footer;