import { Breadcrumb, Row, Col } from "react-bootstrap";
import "./Style/Nav.css";

export default function Nav() {
  return (
    <div className="BR">
      <Row>
        <Col>
          <Breadcrumb className="br1">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </div>
  );
}
