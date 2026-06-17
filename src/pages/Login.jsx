import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    InputGroup,
} from "react-bootstrap";

const Login = () => {
    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                {/* Left Side */}
                <Col
                    md={7}
                    className="d-flex flex-column justify-content-center align-items-center bg-light"
                >
                    <div className="text-center">
                        <h3 className="fw-bold mb-4">
                            <h1 className="text-primary fw-bold">#MulaiLangkahHebat</h1>
                            welcome to my society
                        </h3>

                        <img
                            src="https://i.pinimg.com/736x/b3/0d/ba/b30dbaaafa0b79a670e9b62529e1c2cc.jpg"
                            alt="Programmer"
                            className="img-fluid"
                            style={{ maxWidth: "400px" }}
                        />
                    </div>
                </Col>

                 <Col
                    md={5}
                    className="bg-white d-flex align-items-center justify-content-center"
                    style={{
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                    }}
                >
                    <div style={{ width: "100%", maxWidth: "380px" }}>
                        <h5 className="text-center font-bold mb-3">Masuk Dulu</h5>

                        <Form>
                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="Masukkan Email"
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <InputGroup.Text>🔒</InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Masukan Password"
                                    />
                                </InputGroup>
                            </Form.Group>

                            <div className="text-end mb-4">
                                <a href="/" className="text-decoration-none small">
                                    Lupa Kata Sandi
                                </a>
                            </div>

                            <Button
                                variant="primary"
                                className="w-100 py-2"
                            >
                                MASUK
                            </Button>

                            <p className="text-center text-muted small mt-4">
                                Dengan masuk ke dalam akun, kamu menyetujui syarat &
                                ketentuan serta kebijakan privasi.
                            </p>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;