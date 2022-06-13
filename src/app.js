import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Img from "./components/Img";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

export default function App(){
    return (
        <Container fluid className='example'>
            <Row>
                <Col><Img />
                <Header />
                <Content />
                <Footer />
                </Col>
            </Row>
        </Container>
    )
}