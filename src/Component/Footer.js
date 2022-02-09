import { Row, Col, ListGroup, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ft">
      <Row>
        <Col>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Liga Indonesia
            </ListGroup.Item>
            <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              Divisi Primera
            </ListGroup.Item>
            <ListGroup.Item as="li">Serie A</ListGroup.Item>
            <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
            <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <div className="container-fluid bg-light p-5">
            <h1 class="display-6">
              <b>DIVISI PRIMERA</b>
            </h1>
            <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Read More
            </a>
          </div>
        </Col>
        <Col>
          <Form>
            <center>
              <img
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                alt="user-pic"
              />
              <h3>Silahkan Login</h3>
            </center>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Masukan Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>
            <Button variant="primary" onClick={handleShow} type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Username & Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
